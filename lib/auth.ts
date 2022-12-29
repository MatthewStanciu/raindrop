import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { db } from './db'
import isInOrg from './is-in-org'

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
    async signIn({ user, account, profile, email, credentials }) {
      return await isInOrg(user.email)
    },
    async session({ token, session }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email as string
        }
      })
      if (!dbUser) {
        await db.user.create({
          data: {
            email: token.email as string
          }
        })
      }

      return session
    },
    async redirect({ url, baseUrl }) {
      return '/dashboard'
    }
  }
}
