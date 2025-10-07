import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const db_connect = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected succesfully");
    }catch (error) {
        console.log("Database connection failed:", error)
        process.exit(1)
    }
}

export { prisma, db_connect };