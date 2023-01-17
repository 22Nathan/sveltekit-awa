
import { error } from '@sveltejs/kit'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const like = await prisma.like.findMany()  
    // .then(async () => { await prisma.$disconnect() })
    // .catch(async (/** @type {any} */ e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })

    let total = 0

    if(like){
        like.forEach((/** @type {any} */ dataItem) => {
			if(dataItem.total > 0) total += dataItem.total
		})
        return {total}
    }

    throw error(404, 'Not found')

}