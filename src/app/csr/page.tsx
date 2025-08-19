"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState("Loading...");

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toISOString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>Rendered in the browser at: {time}</p>
    </div>
  );
}
