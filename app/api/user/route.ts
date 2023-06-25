import { prisma } from "@/configs";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

const handleCreateUser = async (req: Request) => {

    const body: User = await req.json();
    
    const user = await prisma.user.create({
        data: {
            name: body.name,
            lastname: body.lastname,
            sex: body.sex,
            date_birthday: body.date_birthday,
            is_accept_special_demand: body.is_accept_special_demand,
            email: body.email,
            password: body.password,
        }
    })

    return NextResponse.json({user});
}

export {
    handleCreateUser as POST
}