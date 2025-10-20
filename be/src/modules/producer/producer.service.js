import { prisma } from "../../config/db.js";

export const index = async () => {
    return await prisma.producer.findMany();
}

export const create = async (data) => {
    return await prisma.producer.create({
        data: data
    });
}

export const show = async (id) => {
    return await prisma.producer.findUnique({
        where: {
            user_id: id
            
        }
    });
}