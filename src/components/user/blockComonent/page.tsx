import { FcLike } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { TbLocationShare } from "react-icons/tb";
import React from "react";
import { FetchPostData } from "@/Interface/post";
import { formatDate } from "@/components/validations/fuctions";


interface HidePartProps {
  postDetails: FetchPostData | null;
}

const HidePart: React.FC<HidePartProps> = ({ postDetails }) =>{
  return (
    <div className="w-full p-5 lg:p-5">
      <div className="flex justify-center items-center gap-5 mb-5 text-textRandom font-kumbh py-4">
        <div className="flex">
        <FcLike size={24} />
          <p className="text-textRandom font-kumbh">24k</p>
        </div>
        <div className="flex">
        <IoEyeSharp size={24} />
          <p>20k</p>
        </div>
        <div className="flex">
        <TbLocationShare size={24} />
          <p>50k</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-10 flex-wrap">
          <div>
            <p className="text-textRandom">Publication Dates</p>
            <p className="text-[14px]">{postDetails && formatDate(postDetails?.createdAt)}</p>
          </div>
          <div>
            <p className="text-textRandom">Category</p>
            <p className="text-[14px]">{postDetails && postDetails.Category}</p>
          </div>
        </div>
        <div className="flex gap-10 flex-wrap">
          <div>
            <p className="text-textRandom">Reading Time</p>
            <p className="text-[14px]">10 Min</p>
          </div>
          <div>
            <p className="text-textRandom">Author Name</p>
            <p className="text-[14px]">{postDetails && postDetails.userId?.name}</p>
          </div>
        </div>

        <div className="bg-inputBackground p">
          <p className="text-textRandom">Table of Contents</p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-[14px] px-2 ">
            {
              postDetails && postDetails.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))
            }

            <li>Introduction</li>
            <li>AI in Diagnostic Imaging</li>
            <li>Predictive Analytics and Disease Prevention</li>
            <li>The Future of AI in Healthcare</li>
            <li>Conclusion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HidePart;
