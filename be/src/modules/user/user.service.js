import { prisma } from "../../config/db.js";

export const check_email = async (user_email) => {
    return await prisma.user.findFirst({
        email: user_email
    })
}

export const get_all_users = async () => {
    return await prisma.user.findMany();
}

export const regist = async (data) => {
    return await prisma.user.create({ data });
}

export const update = async (user_id, user_data) => {
    return await prisma.user.update({
        where: {id: user_id},
        data: user_data
    });
}

export const destroy = async (user_id) => {
    return await prisma.user.delete({
        where: {id: user_id}
    });
}