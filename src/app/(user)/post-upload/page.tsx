'use client'
import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebaseConfig/firebase';
import { addPost } from '@/api/user'
import { postData } from '@/Interface/post';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const PostUpload = () => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [topic, setTopic] = useState(''); // Input for individual topics
  const [topics, setTopics] = useState<string[]>([]); // List of all added topics
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [Category,setCatogory] = useState('')
  


  const router = useRouter();
  const [errors, setErrors] = useState({
    heading: '',
    content: '',
    image: '',
    topics: '',
    Category:''
  });

  const { mutate , isPending } = useMutation({
    mutationFn: async (datas: postData) => {
      const response = await addPost(datas); 
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
      setCatogory('')
      router.push('/profile');  
    },
    onError: (error: any) => {
      console.error('Error while adding post', error);
      toast.error('Failed to add post!');
    },
  });

  // Function to handle image upload and preview
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
    setErrors({ ...errors, image: 'Image is required' });
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
      image: fileImage === null ? 'Image is required' : '',
      topics: topics.length === 0 ? 'At least one topic is required' : '',
      Category: Category.trim() === '' ? 'Category is required' : '',

      
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const formData: postData = {
        Category,
        heading,
        content,
        topics,
        fileUrl: null,
        
      };

      if (fileImage) {
        try {
          const storageRef = ref(storage, `images/${fileImage.name}`);
          await uploadBytes(storageRef, fileImage);
          const url = await getDownloadURL(storageRef);
          setFileUrl(url);
          formData.fileUrl = url;
          mutate(formData);  // Trigger the mutation to add the post
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    }
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
      >
        {/* Heading Input */}
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

        {/* work area */}



        
       


        <label htmlFor="heading" className="block text-gray-200 font-bold mb-2">
            Category
          </label>
        <Select onValueChange={setCatogory}> {/* Step 2: Set the selected value */}
        <SelectTrigger className="w-[180px]">
          <SelectValue className='text-white'>{Category || ""}</SelectValue> {/* Display selected fruit or placeholder */}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup >
            {/* <SelectLabel>Fruits</SelectLabel> */}
            <SelectItem  value="Technologies">Technologies</SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Arts">Arts</SelectItem>
            <SelectItem value="Movies">Movies</SelectItem>
            <SelectItem value="Politics">Politics</SelectItem>
            <SelectItem value="Environment">Environment</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {errors.Category && <p className="text-red-500 text-sm">{errors.Category}</p>}


        {/* work area */}





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

        {/* Image Upload */}
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

        {/* Topics Input */}
        <div className="mb-4">
          <label htmlFor="topic" className="block text-gray-200 font-bold mb-2">
            Table of Contents (Add Topics)
          </label>
          <div className="flex items-center">
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded mr-2"
              placeholder="Enter a topic"
            />
            <button
              type="button"
              onClick={handleAddTopic}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
          {errors.topics && <p className="text-red-500 text-sm">{errors.topics}</p>}

          {/* Display the list of added topics */}
          {topics.length > 0 && (
            <ul className="mt-4 text-gray-300">
              {topics.map((topic, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{index + 1}. {topic}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTopic(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Post
          </button>
        </div>
        {isPending && <p className='text-red-400'>Uploading and adding post...</p>}
      </form>
    </div>
  );
};

export default PostUpload;
