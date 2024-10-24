import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the type for your user data
interface User {
    _id:string
    name: string
    email: string
    Designation: string
    profilePicture: string
    isBlocked: boolean;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

// Create the store with persist middleware
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null, // Initial state is no user
      setUser: (user) => set({ user }), // Save user details
      clearUser: () => set({ user: null }), // Clear user details (on logout)
    }),
    {
      name: 'userData', // Key name for localStorage
      storage: createJSONStorage(() => localStorage), // Use createJSONStorage
    }
  )
);
