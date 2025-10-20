import { prisma } from "../../config/db.js";

export const get_all = async () => {
    return await prisma.unit_of_Measurement.findMany();
}

export const create = async (data) => {
    return await prisma.unit_of_Measurement.create({
        data: data
    });
}

export const update = async (id, data) => {
    return await prisma.unit_of_Measurement.update({
        where: {
            id: id
        }, 
        data: data
    })
}

export const destroy = async (id) => {
    return await prisma.unit_of_Measurement.delete({
        where: {
            id: id
        }
    });
}