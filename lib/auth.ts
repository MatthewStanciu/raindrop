import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { db } from './db'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        //@ts-ignore
        session.user.id = token.id
        //@ts-ignore
        session.user.email = token.email
      }

      return session
    },
    async redirect({ url, baseUrl }) {
      return '/dashboard'
    }
  }
}
