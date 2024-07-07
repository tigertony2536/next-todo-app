import { Button } from "../Button/Button";
import { taskIsChecked } from "@/libs/actions";

interface CardProps {
	name: string;
	description: string | null;
	dueDate: string;
	completed: boolean;
}

export default function TaskCard({
	name,
	description,
	dueDate,
	completed,
}: CardProps) {
	function handleCheck(e: React.FormEvent<HTMLInputElement>) {
		taskIsChecked(e);
	}

	return (
		<div className="bg-white rounded-xl h-28 w-full border border-black/25 shadow-xl flex p-4 pl-8 gap-2">
			<input
				type="checkbox"
				className="align-top h-4 w-4 rounded-full grow-0 shrink-0"
				checked={completed}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					handleCheck(e);
				}}></input>
			<div className="flex flex-col gap-1 w-full">
				<p>{name}</p>
				<p>{description}</p>
				<p className="text-paragraph-small text-primary">{dueDate}</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-1 w-40">
				<Button
					type="submit"
					buttonSize="small"
					buttonStyle="primary"
					text="Edit"
					className="w-24 rounded-full"
				/>
				<Button
					type="submit"
					buttonSize="small"
					buttonStyle="primary"
					text="Delete"
					className="w-24 rounded-full"
				/>
			</div>
		</div>
	);
}
