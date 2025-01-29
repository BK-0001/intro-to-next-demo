"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div>
      <h1>Error: {error.message}</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
