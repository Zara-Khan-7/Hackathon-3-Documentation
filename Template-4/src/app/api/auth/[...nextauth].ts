import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Ensure credentials exist before accessing properties
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (credentials.email === adminEmail && credentials.password === adminPassword) {
          return { id: "1", name: "Admin", email: credentials.email };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/adminlogin", // Redirects to custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
