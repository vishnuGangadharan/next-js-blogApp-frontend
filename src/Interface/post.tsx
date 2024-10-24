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

  }
  

  export interface postData {
    heading : string;
    content : string;
    topics  : string[];
    fileUrl : string | null;
    Category: string

}