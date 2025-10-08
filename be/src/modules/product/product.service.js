import { prisma } from "../../config/db";

export const get_by_filter = async (query) => {
    return await prisma.product.findManynd({
        where: {
            name: {
                contains: query
            }
        },    
        take: 10
    });
}

export const get_by_id = async (id) => {
    return await prisma.product.findUnique({
        where: {id: id}
    });
}

export const create = async (data) => {
    return await prisma.product.create({data})
}

export const update = async (id, data) => {
    return await prisma.product.update({
        where: {id: id},
        data: data
    });
}

export const destroy = async (data) => {
    return await prisma.product.update({
        where: {id: id}
    });
}