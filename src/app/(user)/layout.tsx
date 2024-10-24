// src/app/(auth)/(user)/login/layout.tsx
import Footer1 from '@/components/user/footer1/page';
import FooterMain from '@/components/user/footerMain/page';
import Navbar from '@/components/user/navbar/page';
import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* This layout doesn't include Navbar and Footer */}
      <Navbar/>
      <main>{children}</main>
      <FooterMain/>
    </div>
  );
};

export default UserLayout;
