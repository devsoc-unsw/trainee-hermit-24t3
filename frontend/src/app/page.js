"use client";

import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <div>
      <div>
        Landing Page
      </div>
      <button 
        onClick={() => router.push(`login`)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Log in
      </button>
      <button 
        onClick={() => router.push(`register`)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
    </div>
  );
}
