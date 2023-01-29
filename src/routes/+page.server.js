

// ---------------------------------------
// IMPORT

    import { error } from '@sveltejs/kit'
    import { PrismaClient } from '@prisma/client'

// ---------------------------------------
// LET & CONST & VAR

    const prisma = new PrismaClient()

// ---------------------------------------
// FUNCTIONS RANDOM

    function getDateNow() {
        // return today date as string - dd/mm/yyyy
        let dateNow = new Date(), month, day, year

        month = '' + (dateNow.getMonth() + 1)
        day   = '' +  dateNow.getDate()
        year  =       dateNow.getFullYear()

        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        return [year, month, day].join('-')
    }

// ---------------------------------------
// PRISMA

    async function prismaGetTotalLike(){
        const like = await prisma.like.findMany()
        let total = 0
        if(!like) throw error(404, 'Not found')
        like.forEach((dataItem) => { if(dataItem.total > 0) total += dataItem.total })
        return {total}
    }

// ---------------------------------------
// SERVER LOAD

    /** @type {import('./$types').PageServerLoad} */
    export async function load({ params }) {

        return {
            total : (await prismaGetTotalLike()).total,
        }

    }

// ---------------------------------------
// FORM ACTIONS

    /** @type {import('./$types').Actions} */
    export const actions = {

        increment: async ({ request }) => {
            const like = await prisma.like.create({
                data: {
                    date: getDateNow(),
                    total: 1,
                },
            })
            return (await prismaGetTotalLike()).total
        }

    }


