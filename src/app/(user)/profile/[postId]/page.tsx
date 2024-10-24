// 'use client'
// import { useState, ChangeEvent, useEffect } from 'react';
// import Image from 'next/image';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from '@/firebaseConfig/firebase';
// // import { updatePost, getPostDetails } from '@/api/user';
// import { useRouter, useParams } from 'next/navigation';
// import { useMutation, useQuery } from '@tanstack/react-query';
// import { toast } from 'react-toastify';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { getPostDetails } from '@/api/user';
// import { postData } from '@/Interface/post';
// const EditPost = () => {
//   const router = useRouter();
//   const { postId  } = useParams(); // Assuming postId is part of the route
//   const [postDetails, setPostDetails] = useState<postData | null>(null); // Holds the fetched post details

// const [heading, setHeading] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState<string | null>(null);
//   const [topic, setTopic] = useState(''); 
//   const [topics, setTopics] = useState<string[]>([]);
//   const [fileImage, setFileImage] = useState<File | null>(null);
//   const [fileUrl, setFileUrl] = useState<string | null>(null);
//   const [Category, setCategory] = useState('');
//   const [errors, setErrors] = useState({
//     heading: '',
//     content: '',
//     image: '',
//     topics: '',
//     Category: '',
//   });


 
//   const { data: posts, isLoading, error } = getPostDetails(postId as string);
//   console.log('kkkkkkkk',posts);
  

//   // Handle image change and preview
//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setFileImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//         setErrors({ ...errors, image: '' });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleImageDelete = () => {
//     setImage(null);
//     setFileImage(null);
//   };

//   const handleAddTopic = () => {
//     if (topic.trim() !== '') {
//       setTopics([...topics, topic]);
//       setTopic('');
//       setErrors({ ...errors, topics: '' });
//     } else {
//       setErrors({ ...errors, topics: 'Please enter a topic' });
//     }
//   };

//   const handleRemoveTopic = (index: number) => {
//     setTopics(topics.filter((_, i) => i !== index));
//   };

//   const validateForm = () => {
//     const newErrors = {
//       heading: heading.trim() === '' ? 'Heading is required' : '',
//       content: content.trim() === '' ? 'Content is required' : '',
//       image: fileImage === null && !image ? 'Image is required' : '',
//       topics: topics.length === 0 ? 'At least one topic is required' : '',
//       Category: Category.trim() === '' ? 'Category is required' : '',
//     };
//     setErrors(newErrors);
//     return Object.values(newErrors).every((error) => error === '');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const updatedData: Partial<postData> = {
//         Category: Category !== postDetails?.Category ? Category : undefined,
//         heading: heading !== postDetails?.heading ? heading : undefined,
//         content: content !== postDetails?.content ? content : undefined,
//         topics: topics !== postDetails?.topics ? topics : undefined,
//         fileUrl: fileUrl || postDetails?.fileUrl,
//       };

//       if (fileImage) {
//         try {
//           const storageRef = ref(storage, `images/${fileImage.name}`);
//           await uploadBytes(storageRef, fileImage);
//           const url = await getDownloadURL(storageRef);
//           setFileUrl(url);
//           updatedData.fileUrl = url;
//         } catch (error) {
//           console.error('Error uploading file:', error);
//         }
//       }

//     //   mutate(updatedData);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
//       >
//         {/* Heading Input */}
//         <div className="mb-4">
//           <label htmlFor="heading" className="block text-gray-200 font-bold mb-2">
//             Heading
//           </label>
//           <input
//             id="heading"
//             type="text"
//             value={heading}
//             onChange={(e) => setHeading(e.target.value)}
//             className="w-full p-2 bg-gray-700 text-white rounded"
//             placeholder="Enter the heading"
//             required
//           />
//           {errors.heading && <p className="text-red-500 text-sm">{errors.heading}</p>}
//         </div>

//         {/* Category */}
//         <div className="mb-4">
//           <label htmlFor="category" className="block text-gray-200 font-bold mb-2">
//             Category
//           </label>
//           <Select onValueChange={setCategory}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue className='text-white'>{Category || ""}</SelectValue>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectItem value="Technologies">Technologies</SelectItem>
//                 <SelectItem value="Sports">Sports</SelectItem>
//                 <SelectItem value="Arts">Arts</SelectItem>
//                 <SelectItem value="Movies">Movies</SelectItem>
//                 <SelectItem value="Politics">Politics</SelectItem>
//                 <SelectItem value="Environment">Environment</SelectItem>
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//           {errors.Category && <p className="text-red-500 text-sm">{errors.Category}</p>}
//         </div>

//         {/* Content Input */}
//         <div className="mb-4">
//           <label htmlFor="content" className="block text-gray-200 font-bold mb-2">
//             Content
//           </label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-2 bg-gray-700 text-white rounded h-32"
//             placeholder="Enter the content"
//             required
//           />
//           {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
//         </div>

//         {/* Image Upload */}
//         <div className="mb-4">
//           <label htmlFor="image" className="block text-gray-200 font-bold mb-2">
//             Upload Image
//           </label>
//           {image ? (
//             <div className="relative">
//               <Image
//                 src={image}
//                 alt="Preview"
//                 width={400}
//                 height={300}
//                 className="rounded mb-2"
//               />
//               <button
//                 type="button"
//                 onClick={handleImageDelete}
//                 className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
//               >
//                 Delete
//               </button>
//             </div>
//           ) : (
//             <input
//               id="image"
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="text-gray-200"
//               required
//             />
//           )}
//           {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
//         </div>

//         {/* Topics Input */}
//         <div className="mb-4">
//           <label htmlFor="topics" className="block text-gray-200 font-bold mb-2">
//             Topics
//           </label>
//           <div className="flex gap-2">
//             <input
//               id="topics"
//               type="text"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="w-full p-2 bg-gray-700 text-white rounded"
//               placeholder="Enter a topic"
//             />
//             <button
//               type="button"
//               onClick={handleAddTopic}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Add
//             </button>
//           </div>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {topics.map((t, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center gap-2"
//               >
//                 {t}
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveTopic(index)}
//                   className="text-red-400"
//                 >
//                   &times;
//                 </button>
//               </span>
//             ))}
//           </div>
//           {errors.topics && <p className="text-red-500 text-sm">{errors.topics}</p>}
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6">
//           <button
//             type="submit"
//             className={`w-full bg-green-500 text-white px-4 py-2 rounded
                
//             `
//           }
//             // disabled={isPending}
//           >
//            update
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditPost;








// //   // Fetch post details when the component mounts
// //   useQuery(['postDetails', postId], async () => {
// //     const post = await getPostDetails(postId);
// //     setPostDetails(post);
// //     setHeading(post.heading);
// //     setContent(post.content);
// //     setTopics(post.topics);
// //     setCategory(post.Category);
// //     setImage(post.fileUrl); // Set the image URL from the existing post
// //   });

//   // Update only the modified fields
// //   const { mutate, isPending } = useMutation({
// //     mutationFn: async (updatedData: Partial<postData>) => {
// //       const response = await updatePost(postId, updatedData);
// //       return response;
// //     },
// //     onSuccess: () => {
// //       toast.success('Post updated successfully!');
// //       router.push('/profile');  
// //     },
// //     onError: (error: any) => {
// //       console.error('Error while updating post', error);
// //       toast.error('Failed to update post!');
// //     },
// //   });





'use client'
import { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebaseConfig/firebase';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getPostDetails, updatePost } from '@/api/user';
import { postData } from '@/Interface/post';
import { useMutation } from '@tanstack/react-query';

const EditPost = () => {
  const router = useRouter();
  const { postId } = useParams(); // Assuming postId is part of the route

  const [postDetails, setPostDetails] = useState<postData | null>(null); // Holds the fetched post details
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [topic, setTopic] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [Category, setCategory] = useState('');
  const [errors, setErrors] = useState({
    heading: '',
    content: '',
    image: '',
    topics: '',
    Category: '',
  });

  const { data: postData, isLoading, error } = getPostDetails(postId as string);

  // Update form fields when post details are fetched
  useEffect(() => {
    if (postData) {
      setPostDetails(postData);
      setHeading(postData.heading || '');
      setContent(postData.content || '');
      setImage(postData.fileUrl || null);
      setTopics(postData.topics || []);
      setCategory(postData.Category || '');
      setFileUrl(postData.fileUrl || null);
    }
  }, [postData]);

  // Handle image change and preview
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setErrors({ ...errors, image: '' });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    setFileImage(null);
  };

  const handleAddTopic = () => {
    if (topic.trim() !== '') {
      setTopics([...topics, topic]);
      setTopic('');
      setErrors({ ...errors, topics: '' });
    } else {
      setErrors({ ...errors, topics: 'Please enter a topic' });
    }
  };

  const handleRemoveTopic = (index: number) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {
      heading: heading.trim() === '' ? 'Heading is required' : '',
      content: content.trim() === '' ? 'Content is required' : '',
      image: fileImage === null && !image ? 'Image is required' : '',
      topics: topics.length === 0 ? 'At least one topic is required' : '',
      Category: Category.trim() === '' ? 'Category is required' : '',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const { mutate , isPending } = useMutation({
    mutationFn: async (datas: postData) => {
      const response = await updatePost(datas); // Your API call to add post
      return response;
    },
    onSuccess: () => {
      toast.success('Post added successfully!');
      setHeading('')
      setContent('')
      setImage(null)
      setTopic('')
      setTopics([])
      setFileImage(null)
      setFileUrl('')
      setCategory('')
      router.push('/profile');  
    },
    onError: (error: any) => {
      console.error('Error while adding post', error);
      toast.error('Failed to add post!');
    },
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validateForm()) {
      const changes: Partial<postData> = {};
  
      if (Category !== postDetails?.Category) changes.Category = Category;
      if (heading !== postDetails?.heading) changes.heading = heading;
      if (content !== postDetails?.content) changes.content = content;
      if (topics !== postDetails?.topics) changes.topics = topics;
  
      if (fileImage) {
        try {
          const storageRef = ref(storage, `images/${fileImage.name}`);
          await uploadBytes(storageRef, fileImage);
          const url = await getDownloadURL(storageRef);
          setFileUrl(url);
          changes.fileUrl = url;
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      } else if (image && image !== postDetails?.fileUrl) {
        changes.fileUrl = image;
      }
  
      if (Object.keys(changes).length > 0) {
        const updatedData: any = {
          postId, 
          ...changes, 
        };
        console.log('fffffffffff',updatedData);
        
        mutate(updatedData);
      } else {
        toast.info("No changes to update");
      }
    }
  };
  
  
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
      >
        <div className="mb-4">
          <label htmlFor="heading" className="block text-gray-200 font-bold mb-2">
            Heading
          </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Enter the heading"
            required
          />
          {errors.heading && <p className="text-red-500 text-sm">{errors.heading}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-200 font-bold mb-2">
            Category
          </label>
          <Select onValueChange={setCategory} defaultValue={Category}>
            <SelectTrigger className="w-[180px]">
              <SelectValue  className='text-red-400 bg-white'>{Category}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Technologies">Technologies</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
                <SelectItem value="Movies">Movies</SelectItem>
                <SelectItem value="Politics">Politics</SelectItem>
                <SelectItem value="Environment">Environment</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.Category && <p className="text-red-500 text-sm">{errors.Category}</p>}
        </div>

        {/* Content Input */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-200 font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded h-32"
            placeholder="Enter the content"
            required
          />
          {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-200 font-bold mb-2">
            Upload Image
          </label>
          {image ? (
            <div className="relative">
              <Image
                src={image}
                alt="Preview"
                width={400}
                height={300}
                className="rounded mb-2"
              />
              <button
                type="button"
                onClick={handleImageDelete}
                className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
              >
                Delete
              </button>
            </div>
          ) : (
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-gray-200"
              required
            />
          )}
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="topics" className="block text-gray-200 font-bold mb-2">
            Topics
          </label>
          <div className="flex gap-2">
            <input
              id="topics"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded"
              placeholder="Enter a topic"
            />
            <button
              type="button"
              onClick={handleAddTopic}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {topics.map((t, index) => (
              <span
                key={index}
                className="bg-gray-600 text-white px-3 py-1 rounded-full flex items-center gap-2"
              >
                {t}
                <button
                  type="button"
                  onClick={() => handleRemoveTopic(index)}
                  className="bg-red-500 text-white rounded-full px-2"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          {errors.topics && <p className="text-red-500 text-sm">{errors.topics}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPost;
