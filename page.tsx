import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen bg-black overflow-scroll">
      <div className="flex flex-col items-center justify-center min-h-full">
        <div className="flex flex-col items-center justify-center min-w-full">
          <h1 className="text-center text-white">Welcome to EverywhereNow</h1>
        </div>
      </div>
    </main>

  );
}
