import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          // Make a POST request to your authentication endpoint
          const response = await axios.post(process.env.NEXT_PUBLIC_API_PATH + 'login', { email: credentials.email, password: credentials.password });

          if (response.data.status != 'error') {
            const user = {
              name: response?.data?.data?.user?.name,
              email: response?.data?.data?.user?.email,
              user_id: response.data?.data?.user?.user_id,
              token: response?.data?.data?.auth_token,
            };
            
            return Promise.resolve(user);
          } else {

            const error = response.data?.message || 'Authentication failed';
            // Redirect to custom login page with error message as query parameter
            throw new Error(error);
          }
        } catch (error) {
          console.log(error);
          console.error("Error occurred during authentication:", error);
          const errorMessage = error?.response?.data?.message || 'An unexpected error occurred';
          throw new Error(errorMessage);
        }
      },
    }),
  ],

  pages: {
    signIn: '/login',
    // error:'/login'
  },


  secret: process?.env?.NEXTAUTH_SECRET,
  // secret: 'dsasdasdasdasdasd',

  session: {
    jwt: true, // Enable JWT sessions
  },
  // to add other keys into session
  callbacks: {
    async session({ session, token }) {
      //  console.log('token',token);

      session.user = token.user;
      // console.log(session);

      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      if (trigger === "update" && session?.name) {
        // Note, that `session` can be any arbitrary object, update token with exact object!
        token.user.name = session.name
      }
      if (trigger === "update" && session?.phone) {
        // console.log("update",session.phone,token.phone);
        token.phone = session.phone
      }
      return token;
    },
  },
  cookies: {
    secure: process.env.NODE_ENV === 'production', // Set secure flag in production
  },
});