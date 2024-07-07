"use client";

import { Button } from "../Button/Button";
import FormField from "@/components/Form/formField";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { Task } from "@prisma/client";
import DatePicker from "react-datepicker";
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import "react-datepicker/dist/react-datepicker.css";

export function Modal({
	open,
	closeModal,
}: {
	open: boolean;
	closeModal: Dispatch<SetStateAction<boolean>>;
}) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState(new Date());
	const modalRef = useRef<HTMLDialogElement>(null);

	const methods = useForm<Task>({
		defaultValues: {
			name: "",
			description: "",
			dueDate: new Date(),
		},
		criteriaMode: "all",
	});

	useEffect(() => {
		if (open) {
			modalRef.current?.showModal();
		} else {
			modalRef.current?.close();
		}
		return () => {
			modalRef.current?.close();
		};
	}, [open]);

	const onSubmit = (data: Task) => {};
	return (
		<dialog
			ref={modalRef}
			className="w-96 h-80 p-2 bg-white border border-black/50 ">
			<div className="relative w-full h-full flex justify-center items-center">
				<button
					className="absolute top-1 right-2 font-semibold text-black/50"
					onClick={() => closeModal(false)}>
					x
				</button>
				<div className="w-full h-full flex flex-col p-8 justify-start items-center gap-2">
					<FormProvider {...methods}>
						<form
							noValidate
							onSubmit={methods.handleSubmit(onSubmit)}
							className="flex flex-col items-start gap-8 w-full">
							<FormField
								changeSetter={setName}
								type="name"
								name="name"
								placeholder="Task's name"
								options={{
									required: {
										value: true,
										message: "Task's name is required",
									},
								}}></FormField>
							<FormField
								changeSetter={setDescription}
								type="description"
								name="description"
								placeholder="Description"></FormField>
							<Controller
								name="dueDate"
								render={({ field }) => (
									<DatePicker
										withPortal
										onChange={(date) =>
											field.onChange(date)
										}
										onSelect={(date) => setDueDate(date)}
										selected={dueDate}
										dateFormat="dd-MM-yyyy"
										popperClassName="buttom-0"
										wrapperClassName="w-full relative"
									/>
								)}
							/>
							<Button
								type="submit"
								buttonSize="large"
								buttonStyle="primary"
								text="Create new Task"
							/>
						</form>
					</FormProvider>
				</div>
			</div>
		</dialog>
	);
}
