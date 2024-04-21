import NextAuth, {
  NextAuthOptions,
  User,
  Session,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import type { User } from "@prisma/client";
import { JWT } from "next-auth/jwt";
import { Adapter, AdapterUser } from "next-auth/adapters";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
    user: { id: number } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@doe.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user?: AdapterUser | User }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      if (session.user) {
        session.user.id = token.id as number;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
