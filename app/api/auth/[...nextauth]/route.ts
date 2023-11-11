import NextAuth, { NextAuthOptions, Session, getServerSession } from "next-auth"
import CognitoProvider, { CognitoProfile } from "next-auth/providers/cognito";
import { OAuthUserConfig } from "next-auth/providers/oauth";

const options: NextAuthOptions = {
  pages: {
    signIn: '/login',
    // signOut: '/user/feed',
    // error: '/user/feed',
    // verifyRequest: '/user/feed',
    // newUser: '/user/feed'
  },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID || '',
      clientSecret: process.env.COGNITO_CLIENT_SECRET || '',
      issuer: process.env.COGNITO_ISSUER,
      // userinfo: 
    } as OAuthUserConfig<CognitoProfile>),
  ],
  callbacks: {
    async jwt({ token, account, profile }: any) {
      // console.log({ token, account, profile })
      if (profile) {
        token.username = profile['cognito:username']
      }
      return token
    },
    async session({ session, token, user }: any) {
      session.id = token.sub
      session.username = token.username
      console.log('token:', token)
      return session
    },
  },
}

function auth() {
  return getServerSession(options)
}

const handler = NextAuth(options)

export { handler as GET, handler as POST, auth }