import { useState } from "react";

import Link from "next/link";
import Router from "next/router";

import { useAuth } from "../../context/AuthContext";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = Router;

  const { signup } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setError("");

    if (email === "") {
      setError("The email is required.");
      return;
    }
    if (password === "") {
      setError("The password is required.");
      return;
    }
    if (password.length < 6) {
      setError("The password should be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signup(email, password);
      router.push("/");
    } catch (e) {
      setError(e.message);
      if (e.message === "Firebase: Error (auth/email-already-in-use).") {
        setError("The email already exist.");
      }
    }
  };

  return (
    <section className="px-4 pt-16">
      <div className="mx-auto w-full max-w-md text-center">
        <h1 className="text-2xl font-bold">Register to The Cinephile House!</h1>

        <div className="my-4" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-md border border-neutral-500/25 p-4"
        >
          <label className="font-medium">Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-neutral-500/25 px-2 py-1"
          />

          <div className="py-2" />

          <label className="font-medium">Password</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg border border-neutral-500/25 px-2 py-1"
          />

          <div className="py-2" />

          <label className="font-medium">Confirm password</label>
          <input
            type="text"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-lg border border-neutral-500/25 px-2 py-1"
          />

          <div className="py-4" />

          <button className="rounded-md bg-red-500 py-1 text-lg font-bold text-neutral-50 transition-colors duration-200 ease-in-out hover:bg-red-600">
            Register
          </button>
        </form>

        <div className="my-2" />

        <p className="text-neutral-900/75">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-neutral-900 transition-colors duration-200 ease-in-out hover:text-red-500"
          >
            Sign in now!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default index;
