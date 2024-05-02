import { PrismaClient, Prisma } from "@prisma/client";
import { TaskRequest } from "@/app/api/task/[id]/route";

const client = new PrismaClient();

export async function GET() {
  try {
    const tasks = await client.task.findMany();
    return Response.json(tasks);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }
  }
}

export async function POST<TaskRequest>(req: Request) {
  try {
    const { name, description, dueDate, completed } = await req.json();
    const task = await client.task.create({
      data: {
        name: name,
        description: description,
        dueDate: dueDate,
        completed: completed,
      },
    });
    return Response.json(task);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }
  }
}
