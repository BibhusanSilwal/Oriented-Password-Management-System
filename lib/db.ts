import { PrismaClient } from "@prisma/client";
// If not in production to avoid Next js hot reload and many prisma client, creating only one prisma client

declare global{
    var prisma:PrismaClient | undefined
}
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db