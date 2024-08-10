import Image from "next/image";
import Chatbot from "../components/Chatbot"; // Ensure the path is correct

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Welcome to History Facts Bot</h1>
      <p className="text-center mb-4">
        Ask our chatbot any historical question or click on one of the predefined questions below to learn some interesting historical facts!
      </p>
      <Chatbot />
    </main>
  );
}





