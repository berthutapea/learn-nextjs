"use client";

import { useEffect } from "react";

export default function Error({
  erorr,
  reset,
}: {
  erorr: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(erorr);
  }, [erorr]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
