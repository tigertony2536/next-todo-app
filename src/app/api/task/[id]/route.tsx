import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

export type TaskRequest = {
  name?: string;
  description?: string;
  dueDate?: string;
  completed?: boolean;
};

export async function GET({ params }: { params: { id: string } }) {
  try {
    const task = await client.task.findUnique({
      where: { id: Number(params.id) },
    });
    return Response.json(task);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }
  }
}

export async function PUT<TaskRequest>(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name, description, dueDate, completed } = await req.json();
    const task = await client.task.update({
      where: { id: Number(params.id) },
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
