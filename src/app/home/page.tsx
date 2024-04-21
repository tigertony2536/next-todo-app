"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import TaskCard from "../components/taskCard";
export default function HomePage() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // When after loading success and have session, show profile
  return (
    status === "authenticated" &&
    session.user && (
      <main>
        <div className="flex flex-col w-full items-center gap-4">
          <div className="text-black/50 flex justify-between w-[800px]] gap-2">
            <label
              htmlFor="filter"
              className="flex items-center">
              {" "}
              Filter by:{" "}
            </label>
            <input
              id="filter"
              name="filter"
              className="w-40 h-8 border-b border-black/50"></input>
            <label
              htmlFor="sorting"
              className="flex items-center">
              Sort by:
            </label>
            <select
              id="sorting"
              name="sorting"
              className="w-40 h-8 border-b border-black/50">
              <option value="name">Name</option>
              <option value="dueDate">Due date</option>
            </select>
            <label
              htmlFor="status"
              className="flex items-center">
              {" "}
              Status:{" "}
            </label>
            <select
              id="status"
              name="status"
              className="w-40 h-8 border-b border-black/50">
              <option value="all">All</option>
              <option value="todo">Todo</option>
              <option value="finished">Finished</option>
            </select>
          </div>
          <div className="w-full flex flex-col justify-start gap-4">
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      </main>
    )
  );
}
