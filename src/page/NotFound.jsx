import React from "react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen pt-30 flex justify-center items-center">
      <div className="text-black space-y-5">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-5xl">Page not Found</p>
        <Button to="/" className="mt-0!">
          Home
        </Button>
      </div>
    </main>
  );
}
