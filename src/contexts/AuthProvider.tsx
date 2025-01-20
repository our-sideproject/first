'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface AuthProviderProps {
  session?: Session | null;
  children: ReactNode;
}

export function AuthProvider({ session, children }: AuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
