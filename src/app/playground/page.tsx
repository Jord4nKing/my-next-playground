"use client";


import Button from "../components/Button";

export default function Playground() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Component Playground</h1>

      <Button onClick={() => alert("Primary button clicked!")}>
        Primary Button
      </Button>

      <Button variant="secondary" onClick={() => alert("Secondary button clicked!")}>
        Secondary Button
      </Button>
    </main>
  );
}
