import { prisma } from "@/app/configs/prisma";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const body: User = req.body;

        const user = await prisma.user.create({ data: body })

        res.status(200).json({ user });
    } else {
        res.status(405).json({ message: 'Метод не разрешен' });
    }
}