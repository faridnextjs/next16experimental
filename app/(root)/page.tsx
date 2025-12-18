import TestClient from "@/components/testClient";

export default function Home() {
  console.log("I am Server Component");
  return (
    <main>
      <h1 className="text-2xl text-red-500">
        {" "}
        Welcome to the Ultimate Next.js 16 (Experimental) Showdown
      </h1>
      <TestClient />
    </main>
  );
}
