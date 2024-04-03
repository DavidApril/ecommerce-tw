import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials'
import bcryptjs from 'bcryptjs'
import { z } from 'zod'

import prisma from './lib/prisma';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials)

                if (!parsedCredentials.success) return null;

                const { email, password } = parsedCredentials.data

                const user = await prisma.user.findUnique({ where: { email: email.toLocaleLowerCase() } });
                
                if( !user ) return null
                if( !bcryptjs.compareSync( password, user.password ) ) return null;

                const { password: _, ...rest } = user;
                return rest;
            }
        })
    ]
};


export const { signIn, signOut, auth } = NextAuth(authConfig)