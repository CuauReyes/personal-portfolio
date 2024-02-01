import { Input } from "@nextui-org/react";

const Login = () => {
  return (
    <div className="container flex-col h-screen mx-auto flex flex-wrap items-center justify-center">
      <h1 className="font-bold text-4xl mb-8">Login</h1>
      <div className="flex max-w-[700px] w-full flex-col gap-4 md:flex-row md:justify-center md:items-center">
        <Input type="email" label="Email" placeholder="Enter your email" />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
};

export default Login;
