import { useFormContext } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { ValidFieldNames } from "./form.type";

interface LoginFormProps {
	name: ValidFieldNames;
}

const FormInput = ({ name }: LoginFormProps) => {
	const form = useFormContext();
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className="mb-4">
					<FormLabel className="text-p">
						{name.toUpperCase()}
					</FormLabel>
					<FormControl>
						<Input
							type={name === "password" ? "password" : "text"}
							placeholder={`Type your ${name}`}
							{...field}></Input>
					</FormControl>
					{/* <FormDescription>Type your email here.</FormDescription> */}
					<FormMessage className="text-sm" />
				</FormItem>
			)}
		/>
	);
};

export default FormInput;
