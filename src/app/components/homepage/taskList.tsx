"use client";

import TaskCard from "./taskCard";
import SearchSort from "./searchSort";
import { useState, useEffect } from "react";
import { Modal } from "./modal";
import { Task } from "@prisma/client";
import { Plus } from "react-bootstrap-icons";
import { Button } from "../button/button";

export default function TaskList({ tasks }: { tasks: Task[] | undefined }) {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    console.log("open modal");
    setOpenModal(!openModal);
  }

  return (
    <>
      <div className="flex flex-col w-full items-center gap-4">
        <SearchSort />
        <ul className="w-full flex flex-col justify-start gap-4 list-none">
          {tasks?.map((task) => {
            const { id, name, description, dueDate, completed } = task;
            const dueDateString = new Date(dueDate)?.toDateString();
            return (
              <li key={id}>
                <TaskCard
                  name={name}
                  description={description}
                  dueDate={dueDateString}
                  completed={completed}
                />
              </li>
            );
          })}
        </ul>
        <Modal open={openModal} closeModal={setOpenModal}/>
        <Plus />
        <Button
          buttonSize="small"
          buttonStyle="secondary"
          onClick={handleModal}
          text="New task"
        />
      </div>
    </>
  );
}
