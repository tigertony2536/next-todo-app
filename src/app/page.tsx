import LogInForm from "./components/loginForm";
import { Task } from "@prisma/client";

export default async function LogInPage() {
  return (
    <>
      <LogInForm />
    </>
  );
}
