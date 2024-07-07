"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import React from "react";

type props = {
	children: React.ReactNode;
	session: Session | null | undefined;
};

const SessionWrapper = ({ children, session }: props) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionWrapper;
