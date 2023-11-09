"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
const Login = () => {
  const [error, setError] = useState(null);
  const session = useSession();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && "Something went wrong!"}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        type="button"
        className={styles.loginwithgooglebtn}
      >
        Sign in with Google
      </button>

      <Link href="/dashboard/register" style={{ color: "#6c63ff" }}>
        {" "}
        Dont have an account ? Register{" "}
      </Link>
    </div>
  );
};

export default Login;
