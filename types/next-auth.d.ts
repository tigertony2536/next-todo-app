import NextAuth, { DefaultSession } from "next-auth";
import type { User } from "@prisma/client";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: JWT.token;
    session: {
      user: User;
    };
  }
}
