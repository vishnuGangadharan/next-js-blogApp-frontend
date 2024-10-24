"use client"

import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useUserStore } from "@/lib/store/store";
import { LoginFormSchema } from "@/components/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { useLogin } from "@/api/user";
import { useRouter } from "next/navigation";

const AdminLogin = () => {

  type SigninFormInputs = z.infer<typeof LoginFormSchema>;
  const setUser = useUserStore((state) => state.setUser); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: "onTouched",
  });

  const router = useRouter();

  const {mutate } =useLogin() 

  const onSubmit: SubmitHandler<SigninFormInputs> = (data) => {
    console.log("Form Data: ", data);
    mutate(data, {
      onSuccess: (response) => {     
        console.log('ressdd',response);
           setUser(response.message)
        router.push('/');  // Route redirection handled here
      }
    });
  };

  return (
    <div className="bg-black w-full h-screen p-10 flex justify-center items-center">
      <div
        style={{ backgroundColor: "#1A1A1A" }}
        className="w-[80%] h-[90%] flex relative overflow-hidden"
      >
        <div className="w-[50%] flex flex-col justify-center p-28">
          <h2 className="text-white text-3xl mb-4">Login</h2>
          <p className="text-customGray mb-3">
            How do I get started? Lorem ipsum dolor at?
          </p>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <label className="block text-inter text-white mb-2">Email</label>
            <Input
              type="email"
              {...register("email")}
              autoComplete="off" 
              placeholder="Email"
              className="text-white mb-4 border-customGray"
            />
             {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            <label className="block text-inter text-white mb-2">Password</label>
            <Input
              type="password"
              {...register("password")}
              autoComplete="off" 
              placeholder="Password"
              className="text-white mb-4 border-customGray"
            />
             {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            <div className="flex justify-between items-center mb-8">
              <div></div>
              <p className="text-customYellow cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <button type="submit" className="bg-yellow-500 text-black w-full py-2 rounded-md">
              Login
            </button>
          </form>
          <div className="flex mt-10 justify-center text-center">
            <span className="text-customGray">
              Don’t have an account.
              <span className="text-customYellow cursor-pointer">  Sign up</span>
            </span>
          </div>
        </div>

        <div className="w-[50%] relative flex justify-center items-center bg-customYellow">
          <div className="w-full absolute bottom-0 ">
            <Image
              src="/women.png"
              width={800}
              height={500}
              alt="Login Illustration"
              className="object-contain w-full h-auto"
            />
          </div>

          <div className="absolute z-10 top-8 w-full">
            <h1 className="text-black font-lato text-6xl ml-10 mt-10">
              Very good works are <br /> waiting for you, <br />
              Sign up Now
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
