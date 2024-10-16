import Image from "next/image";
import localFont from "next/font/local";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function emailError(type) {
  const message = {
    pattern: "Please enter the correct email format",
    required: "Email is required",
  };
  return message[type];
}

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full"
        >
          <FormControl isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {!errors.name ? (
              ""
            ) : (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {!errors.email ? (
              <FormHelperText>Enter email for your account</FormHelperText>
            ) : (
              <FormErrorMessage>
                {emailError(errors.email.type)}{" "}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {!errors.password ? (
              <FormHelperText>Be at least 8 characters long</FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormControl>

          <Button type="submit">Submit</Button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        @2024 Ari Dharmika
      </footer>
    </div>
  );
}
