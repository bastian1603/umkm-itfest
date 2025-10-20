import { prisma } from "../../config/db.js";

export const get_by_filter = async (query) => {
    return await prisma.product.findMany({
        where: {
            name: {
                contains: query
            }
        },    
        take: 10
    });
}

export const get_all = async () => {
    return await prisma.product.findMany();
}

export const get_by_id = async (id) => {
    return await prisma.product.findUnique({
        where: {id: id}
    });
}

export const create = async (data) => {
    return await prisma.product.create({data: data})
}

export const update = async (id, data) => {
    return await prisma.product.update({
        where: {id: id},
        data: data
    });
}

export const destroy = async (data_id) => {
    return await prisma.product.delete({
        where: {id: data_id}
    });
}