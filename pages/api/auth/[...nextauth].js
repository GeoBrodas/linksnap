import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const nextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/sign-in',
  },
};

export default NextAuth(nextAuthOptions);
