import { SignupForm } from "./login";

export interface postData {
    heading : string;
    content : string;
    topics  : string[];
    fileUrl : string | null;
    Category: string
    postId? : any
}

export interface FetchPostData {
    _id: string;
    heading: string;
    content: string;
    topics: string[];
    fileUrl: string | null;
    createdAt: string;
    updatedAt: string;
    Category: string
    userId?:SignupForm
  }
  

  export interface postData {
    heading : string;
    content : string;
    topics  : string[];
    fileUrl : string | null;
    Category: string
    userId: string
}