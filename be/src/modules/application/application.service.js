import { prisma } from "../../config/db";

export const requester_application = async (id) => {
    return await prisma.application.findMany({
        where: {
            requester_id: id
        }
    });
};

export const reqeuested_application = async (id) => {
    return await prisma.application.findMany({
        where: {
            requested_id: id
        }
    });
};

export const create = async (data) => {
    return await prisma.application.create({data})
}

export const index = async () => {
    return await prisma.application.findMany()
}

export const show = async (id) => {
    return await prisma.application.findUnique({
        where: {id: id}
    })
}

export const update = async (id, data) => {
    return await prisma.application.update({
        where: {
            id:id
        },
        data: data
    })
}

export const destroy = async (id) => {
    return await prisma.application.destroy({
        where: {
            id:id
        }
    });
}
