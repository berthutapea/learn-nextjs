"use client";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Template {state}</h1>
      <button onClick={() => setState(state + 1)}>Kilk</button>
      {children}
    </div>
  );
}
