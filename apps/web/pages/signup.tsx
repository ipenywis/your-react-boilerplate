import { RegisterForm } from "../components/registerForm";

// const Title = tw.h1`
//   text-7xl
//   text-blue-500
// `;

export default function Web() {
  return (
    <div className="flex flex-col text-white w-full h-full items-center">
      <RegisterForm />
    </div>
  );
}
