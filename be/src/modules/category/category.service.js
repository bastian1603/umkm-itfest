import { prisma } from "../../config/db.js";

export const get_all = async () => {
    return await prisma.category.findMany();
}

export const create = async (data) => {
    return await prisma.category.create({data: data});
}

export const update = async (id, data) => {
    return await prisma.category.update({
        where: {id: id},
        data: data
    });
}

export const destroy = async (id) => {
    return await prisma.category.delete({
        where: {id: id}
    })
}