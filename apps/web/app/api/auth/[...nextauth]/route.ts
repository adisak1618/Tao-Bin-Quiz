import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";


const authOptions: AuthOptions = {
  pages: {
    signIn: '/',
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 356,
  },
  providers: [
    Credentials({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          
          return {
            id: "",
            name: "TaoBin Admin",
            email: credentials?.email,
          };
          
        } catch (error) {
          throw new Error("password incorrect!");
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }: any) {
      console.log("JWT user", user);
      if (trigger === "update" && session?.accessToken) {
        token.accessToken = session.accessToken;
      }
      if (typeof user !== "undefined") {
        return user as unknown as JWT;
      }
      return token;
    },
    session(props: any) {
      console.log("props", props)
      const { session, token, trigger, newSession } = props;

      if (trigger === "update" && newSession?.newAccessToken) {
        session.accessToken = newSession.newAccessToken;
      }
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        authTokenExpiration: token.authTokenExpiration,
        refreshTokenExpiration: token.refreshTokenExpiration,
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
