

import { error } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
import { page } from '$app/stores'
import { writable } from 'svelte/store'
import { readable } from 'svelte/store'
import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit'

// ---------------------------------------

const prisma = new PrismaClient()

// ---------------------------------------

async function prismaGetTotalLike(){
    const like = await prisma.like.findMany()
    let total = 0
    if(!like) throw error(404, 'Not found')
    like.forEach((dataItem) => { if(dataItem.total > 0) total += dataItem.total })
    return {total}
}

// ---------------------------------------

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    return prismaGetTotalLike()

}

// ---------------------------------------

/** @type {import('./$types').Actions} */
export const actions = {

	increment: async ({ request }) => {

        function getDateNow() {
            let dateNow = new Date(), month, day, year

            month = '' + (dateNow.getMonth() + 1)
            day   = '' +  dateNow.getDate()
            year  =       dateNow.getFullYear()
    
            if (month.length < 2) month = '0' + month
            if (day.length < 2) day = '0' + day
    
            return [year, month, day].join('-')
        }

        const like = await prisma.like.create({
            data: {
              date: getDateNow(),
              total: 1,
            },
        })

        return prismaGetTotalLike()
    },

}


