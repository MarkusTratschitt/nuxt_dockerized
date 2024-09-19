//backend/server/api/test.get.ts

import { PrismaClient } from "@prisma/client";
import { defineEventHandler } from "h3";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    
    try {
        // Testabfrage an Tabelle MITARBEITER
        const mitarbeiter = await prisma.mitarbeiter.findMany();
        return { 
            message: 'Verbindung zur Datenbank erfolgreich',
            data: mitarbeiter
            };
    } catch (error) {
        return {
            message: 'Verbindung zur Datenbank fehlgeschlagen',
            error: (error as Error).message,
        }
    }

});


