import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import { useAuth } from "../../context/AuthContext";

const Signup: NextPage = () => {
  const { signup } = useAuth();

  const router = Router;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

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
      router.push("/browse");
    } catch (e: any) {
      setError(e.message);
      if (e.message === "Firebase: Error (auth/email-already-in-use).") {
        setError("The email already exist.");
      }
    }
  };

  return (
    <section className="relative h-screen w-full">
      <Image
        src="/authImage.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-slate-900/75 text-slate-50">
        <h1 className="text-2xl">
          Sign in to <span className="font-bold">TheCinephileHouse</span>
        </h1>

        <div className="py-4" />

        {error ? (
          <div>
            <p className="rounded-md bg-red-500 px-2 py-1 text-lg font-medium">
              {error}
            </p>
            <div className="py-4" />
          </div>
        ) : null}

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xs flex-col items-center justify-center rounded-xl border p-4"
        >
          <label className="font-medium">Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full rounded-md px-2 py-1 text-black"
          />

          <div className="py-2" />

          <label className="font-medium">Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full rounded-md px-2 py-1 text-black"
          />

          <div className="py-2" />

          <label className="font-medium">Confirm password</label>
          <input
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="w-full rounded-md px-2 py-1 text-black"
          />

          <div className="py-4" />

          <button className="w-full rounded-full bg-red-500 px-2 py-1 font-medium text-slate-50 transition duration-200 ease-in-out hover:bg-red-600">
            Sign up
          </button>
        </form>

        <div className="py-2" />

        <p className="text-slate-50/75">
          Already signed up?{" "}
          <Link
            href="/signin"
            className="text-slate-50 transition-colors duration-200 ease-in-out hover:text-slate-50/75"
          >
            Login now!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
