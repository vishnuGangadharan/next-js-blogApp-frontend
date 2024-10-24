// src/app/(auth)/layout.tsx
'use client';  // This makes the component a Client Component

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/user/navbar/page';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const noLayoutRoutes = ['/login', '/auth/user/signup'];

  return (
    <div>
      {!noLayoutRoutes.includes(pathname) && (
        <>
        <Navbar/>
        </>
      )}
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
