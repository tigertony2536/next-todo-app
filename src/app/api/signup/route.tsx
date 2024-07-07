import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST<IFormInput>(req: Request, res: Response) {
	const { name, email, password } = await req.json();
	const hashedPassword = bcrypt.hashSync(password, 10);
	try {
		const user = await prisma.user.create({
			data: { name: name, email: email, password: hashedPassword },
		});
		console.log("Created user successfully");
		return Response.json(user);
	} catch (error) {
		console.log(error);
		return new Error(`Can not create user. ${error}`);
	}
}
