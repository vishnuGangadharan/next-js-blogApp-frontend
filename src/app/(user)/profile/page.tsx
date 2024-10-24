
'use client'
import React from 'react'
import { Card, Avatar, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useUserStore } from "@/lib/store/store";
import { toast } from 'react-toastify';
import { getPosts } from '@/api/user';
import CardsSm from '@/components/user/card/page';

const Profile = () => {


  const user = useUserStore((state) => state.user);
  
  const {data ,isError, isLoading, isSuccess} = getPosts()

  console.log('dassss',data);
  
  if(isError){
    toast.error('server error')
  }


    const route = useRouter()

    const navigateToAddPost=() => {
      route.push('/post-upload')
    }
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-black pt-28 pb-10">
    <Card className="w-[60%] mt-10 h-56 flex flex-col md:flex-row justify-center items-center bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700">
      <div className="mr-10">
        <Avatar
          src={user ? user.profilePicture :''} // Replace with a placeholder or actual image path
          className="w-24 h-24 md:w-28 md:h-28 text-large border-4 border-blue-600"
        />
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[60%]">
        <input
          type="text"
          readOnly
          className="border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white"
          placeholder={user? user.name : 'email'}
          autoComplete="off"
        />
        <input
          type="text"
          readOnly
          className="border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white"
          placeholder={user? user.email : 'email'}
          autoComplete="off"
        />
      </div>
    </Card>

    <div className="w-full mt-14 text-center">
        <div className=' '>
      <span className="text-white text-3xl font-semibold pr-10">My Blogs</span>
      <button
      className="w-44 px-4 py-2  text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out"
      onClick={navigateToAddPost}
    >
      <span className="mr-2">Create Post</span>
    </button>
    {/* <AddPost/> */}
</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-10 px-16">
        {data && data.length >=0 ?
          <CardsSm isProfilePage/> :

        <span className="text-white font-semibold border-2">No blogs available</span>
        }

        {/* If no blogs available, display the following message */}
      </div>
    </div>
  </div>  )
}

export default Profile

