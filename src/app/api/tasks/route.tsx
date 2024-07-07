import { PrismaClient, Prisma } from "@prisma/client";
import { Task } from "@/models/task.type";

const client = new PrismaClient();

interface TaskResponse extends Task {
	id: number;
}

const GET = async (req: Request) => {
	const url = new URL(req.url);
	const sortBy = url.searchParams.get("sortby");
	const sortOrder = url.searchParams.get("order");
	const search = url.searchParams.get("search");
	const query = Prisma.sql([
		`SELECT * FROM "Task" 
		${search ? 'WHERE "name" LIKE %' + search + "%" : ""} 
		${sortBy ? "ORDER BY " + sortBy + " " + sortOrder : ""};`,
	]);
	console.log(query);
	try {
		const tasks: TaskResponse[] = await client.$queryRaw(query);
		return Response.json(tasks);
	} catch (error) {
		console.log(error);
		return Response.json({ error: error });
	}
};

type TaskPostRequest = Task | Task[];

const POST = async <TaskPostRequest,>(req: Request) => {
	try {
		const res = await req.json();
		if (Array.isArray(res)) {
			const result = await client.task.createMany({
				data: res,
			});
			return Response.json(result);
		} else {
			const result = await client.task.create({
				data: res,
			});
			return Response.json(result);
		}
	} catch (error) {
		console.log(error);
		return Response.json({ error: error });
	}
};

export { GET, POST };
