import { z } from "zod";

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Please enter a valid email address",
  }),
  password: z.string({
    required_error: "password is required",
    invalid_type_error: "Please enter a valid email address",
  }),
});

export type State = {
  name?: string;
  email: string;
  password: string;
};

export async function createUser(prevState: State, formdata: FormData) {
  return {};
}
