
import { useMutation, useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import { LoginFormValues, SignupForm } from "@/Interface/login";
import Api from "@/services/axios";
import { toast } from "react-toastify";
import { postData } from "@/Interface/post";
import { FetchPostData } from "@/Interface/post";

// const setUser = useUserStore((state) => state.setUser);


export const useSignup = () => {

  return useMutation({
    mutationFn: async (datas: SignupForm) => {
      const response = await Api.post('/user/signup', datas);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Signup successful!');
    },
    onError: (error: any) => {
      console.error('Signup error', error);
    },
  });
};



export const useLogin = () => {

  return useMutation({
    mutationFn: async (datas: LoginFormValues) => {
      const response = await Api.post('/user/login', datas);
      console.log('esssss',response.data);
      return response.data;

    },
    onSuccess: () => {
      toast.success('Signup successful!');
    },
    onError: (error: any) => {
      console.error('Signup error', error);
    },
  });
};

export const addPost = async (datas: postData) => {
  const response = await Api.post('/user/addPost', datas);
  return response.data;
};

export const getPosts = (): UseQueryResult<FetchPostData[]>  =>{
  return  useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await Api.get('/user/allPosts')
      console.log(response.data );
      
        return response.data as FetchPostData[]
      
    }
  })
}

export const getPostDetails =  (postId : string): UseQueryResult<FetchPostData>  =>{
  return  useQuery({
    queryKey: ["postDetails" ,postId],
    queryFn: async () => {
      const response = await Api.get(`/user/postDetails/${postId}`)
      console.log(response.data );
      
        return response.data.data as FetchPostData[]
      
    },
    enabled: !!postId
  })
};


export const deletePost = () =>{
  const queryClient = useQueryClient();


  return useMutation({
    mutationFn : async (postId: string) =>{
    
      const response = await Api.delete(`/user/deletePost/${postId}`)
      return response.data
    },
    onSuccess: () => {
      toast.success('post deleted');
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: any) => {
      console.error('Signup error', error);
    },
  })
}


export const updatePost = async (datas: postData) => {
  const response = await Api.post('/user/updatePost', datas);
  return response.data;
};