import { prisma } from "../../config/db.js";

export const get_user = (email) => {
    return prisma.user.findFirst({
        where: {email: email}
    });
}