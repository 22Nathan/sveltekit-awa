
import { readable } from 'svelte/store'
import { PrismaClient } from '@prisma/client'
import { error } from '@sveltejs/kit'

const prisma = new PrismaClient()

async function prismaGetTotalLike(){
    const like = await prisma.like.findMany()
    let total = 0
    if(!like) throw error(404, 'Not found')
    like.forEach((dataItem) => { if(dataItem.total > 0) total += dataItem.total })
    return {total}
}

export const total = readable(
    prismaGetTotalLike()
)