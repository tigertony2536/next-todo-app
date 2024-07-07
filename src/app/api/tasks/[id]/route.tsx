import { PrismaClient, Prisma } from "@prisma/client";
import { type Task } from "@/models/task.type";

const client = new PrismaClient();

const GET = async ({ params }: { params: { id: string } }) => {
	try {
		const task = await client.task.findUnique({
			where: { id: Number(params.id) },
		});
		return Response.json(task);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.log(error.message);
			throw new Error(error.message);
		}
	}
};

const PUT = async <Task,>(
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const res = await req.json();
		const result = await client.task.update({
			where: { id: Number(params.id) },
			data: res,
		});
		return Response.json(result);
	} catch (error) {
		console.log(error);
		return Response.json({ error: error });
	}
};

const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
	try {
		const result = await client.task.delete({
			where: { id: Number(params.id) },
		});
		return Response.json(result);
	} catch (error) {
		console.log(error);
		return Response.json({ error: error });
	}
};

export { GET, PUT, DELETE };
