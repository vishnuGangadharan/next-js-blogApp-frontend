import React from 'react';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { TbLocationShare } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";
import { deletePost, getPosts } from '@/api/user';
import { FetchPostData } from '@/Interface/post';
import { FiEdit, FiTrash } from "react-icons/fi";
import { useRouter } from 'next/navigation';


interface CardsSmProps {
  isProfilePage?: boolean;
}
const CardsSm: React.FC<CardsSmProps> = ({ isProfilePage = false }) => {
  const { data: posts, isLoading, error } = getPosts();

  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  const { mutate: handleDeletePost } = deletePost();


  const handleViewPage =(postId: string) => {
    router.push(`/showBlog/${postId}`);

  } 

  const  handlePostDelete = (id:string) => {
    
    handleDeletePost(id)
  }

  const handleEditPost = (postId: string) => {
    router.push(`/profile/${postId}`);
  };

  return (
    <>
      {posts && posts.length > 0 && posts.map((item: FetchPostData) => (
       
         <Card key={item._id} className="bg-black border-none relative " onClick={()=>handleViewPage(item._id)}>
            {isProfilePage && (
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="text-blue-400 hover:text-red-500">
                <FiEdit onClick={()=>handleEditPost(item._id)} size={20} />
              </button>
              <button onClick={()=>handlePostDelete(item._id)} className="text-blue-400 hover:text-red-500">
                <FiTrash  className='' size={20} />
              </button>
            </div>
          )}
         <Image
           src={item.fileUrl || '/placeholder-image.png'}
           alt=""
           className="rounded-xl"
           height={500}
           width={700}
         />
         <div>
           <p className="font-inter text-white mt-2">
            {item.heading}
           </p>
           <p className="font-inter text-textRandom mt-2 mb-2">Politics</p>
           <div className="flex justify-between">
             <div className="flex gap-5">
               <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                 <CiHeart className="text-textRandom mr-2" />
                 <p className="text-textRandom">22k</p>
               </div>
               <div className="flex items-center border rounded-full border-none bg-[#1A1A1A] p-1">
                 <TbLocationShare className="text-textRandom mr-2" />
                 <p className="text-textRandom">22k</p>
               </div>
             </div>
             <Button style={{ backgroundColor: "#1A1A1A" }} className="pb-2 text-textRandom">
               Read More <GoArrowUpRight className="text-customYellow" size={16} />
             </Button>
           </div>
         </div>
       </Card>
      ))}
    </>
  );
};

export default CardsSm;
