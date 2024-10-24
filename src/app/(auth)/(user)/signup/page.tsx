'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import { useForm , SubmitHandler} from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { signupFormSchema } from "@/components/validations/schema";
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import Api from "@/services/axios";
import { toast } from 'react-toastify';
import {  useSignup } from "@/api/user";


const Signup = () => {

  const router = useRouter();
  
  const handleToLogin = () =>{
    router.push('/login')
  }

  type SignupFormInputs = z.infer<typeof signupFormSchema>;


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: "onTouched",
  });

    console.log('inside');
    
     const { mutate,  } = useSignup()


  const onSubmit: SubmitHandler<SignupFormInputs> = (data) => {
    console.log("Form Data: ", data);
    mutate(data, {
      onSuccess: () => {
        router.push('/login');  // Route redirection handled here
      }
    });
    };

  return (
    <div className="min-h-screen bg-black  md:pl-20 md:pr-32 pb-20">
      <div className="sm:block md:hidden pt-6 ">
        <span className="text-inputText flex justify-center text-sm text-center mb-4">
          Subscribe to our Newsletter For Blogs and Resources
          <p className="text-customYellow ml-2">
            <GoArrowUpRight size={24}/>
          </p>
        </span>
      </div>
     <div className="flex w-full justify-center sm:justify-start items-center  bg-[#1A1A1A]  md:bg-black">
  <Image
    src="/Logo.png"
    alt="Logo"
    width={150}
    height={150}
    className="m-5 "
  />
</div>

      <div className="flex flex-col md:flex-row p-5">
        <div className="flex flex-col mt-10 w-full md:w-[50%] ml-0 md:ml-9 md:mt-20 pl-0 md:pl-10">
          <div className="w-full">
            <div className="mb-6 flex">
              <div>
                <div className="w-6 h-6 rounded-full bg-customYellow"></div>
                <div className="w-6 h-6 rounded-full bg-customGray"></div>
              </div>
              <div>
                <div className="w-6 h-6 rounded-full bg-customGray"></div>
                <div className="w-6 h-6 rounded-full bg-customYellow"></div>
              </div>
            </div>
          </div>

          <p className="text-white text-2xl md:text-[38px] md:mt-5 font-kumbh leading-[1.21]">
            Welcome, <br /> Enter Your Details To <br /> Create Account.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center mt-10 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
            <label className="block text-inter text-white ">Full Name</label>
            <input
              id="name"
              {...register("name")}
              placeholder="Enter Your Full Name"
              autoComplete="off" 
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />
             {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

            <label className="block text-inter text-white ">Email Address</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter Your Email Address"
              autoComplete="off" 
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />
             {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            <label className="block text-inter text-white ">Designation</label>
            <input
              type="text"
              id="Designation"
              {...register("Designation")}
              placeholder="Enter your Designation"
              autoComplete="off" 
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />
             {errors.Designation && (
                <p className="text-red-500">{errors.Designation.message}</p>
              )}

            <label className="block text-inter text-white">Password</label>
            <input
              type="password"
              {...register('password')}
              placeholder="Enter your Password"
              autoComplete="off" 
              className="w-full py-3 px-6 text-white bg-inputBg rounded-xl border border-transparent placeholder-inputText focus:outline-none focus:border-blue-500 transition duration-200"
            />
             {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

            <p className="text-white text-inter ml-2">
              I agree with Terms of Use and Privacy Policy
            </p>

            <div className="flex justify-center ">
              <Button type="submit" className="bg-customYellow hover:bg-customYellow w-full md:w-28 text-black">
                Sign Up
              </Button>
            </div>
          </form>

          <div className="text-center">
            <span className="text-white">
              Already have an account?{" "}
              <span className="text-customYellow cursor-pointer" onClick={handleToLogin}>Login</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
