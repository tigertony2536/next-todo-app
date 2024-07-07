import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { TaskRequest } from "../app/api/tasks/[id]/route";

const client = new PrismaClient();

export async function taskIsChecked(e: React.FormEvent<HTMLInputElement>) {
	const checkbox = e.target as HTMLInputElement;
	const taskId = checkbox.id;
	const checked = checkbox.checked;
	try {
		const task = await axios.put<TaskRequest>(
			`http://localhost:3000/api/task/${taskId}`,
			{ completed: checked }
		);
	} catch (error) {
		console.log(error);
	}
}
