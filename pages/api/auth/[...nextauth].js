import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      
    }),
  ],
});
//https://amazon-clone-pawan67.vercel.app/api/auth/callback/google
//https://amazon-clone67.netlify.app/api/auth/callback/google