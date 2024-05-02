import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import TaskList from "../../components/homepage/taskList";
import { Task } from "@prisma/client";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  async function fetchTask() {
    try {
      const res = await fetch("http:localhost:3000/api/tasks");
      const tasks: Task[] = await res.json();
      return tasks;
    } catch (error) {
      console.log(error);
    }
  }
  const tasks = await fetchTask();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      {session && (
        <main>
          <div className="flex flex-col justify-center items-center gap-2">
            <Suspense
              fallback={
                <h1 className="text-primary font-bold text-h3">Loading...</h1>
              }>
              <TaskList tasks={tasks} />
            </Suspense>
          </div>
        </main>
      )}
      {!session && <p>Not signed in</p>}
    </>
  );
}
