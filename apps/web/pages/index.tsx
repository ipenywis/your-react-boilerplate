import { Button } from "ui";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full text-white font-bold p-6">
      <h1 className="text-5xl">Welcome to the Outer Space 🛰</h1>
      <Button
        data-testid="signup-link"
        variant="outline"
        className="mt-10 text-2xl"
        color="blue.300"
        onClick={() => router.push("/signup")}
      >
        Signup Now!
      </Button>
    </div>
  );
}
