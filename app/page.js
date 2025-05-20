// 'use client' must be at the top of the file, before any imports
'use client';

import React, { useState } from 'react';
import Header from '@/Components/Header'; // Ensure the path is correct

const Page = () => {
  const [user, setUser] = useState('veer');
   const [editor, seteditor] = useState('Sahil');
  
 
  return (
    <>
      <Header user={user} edit={editor}/>
      <div>{user}</div>
    </>
  );
};

export default Page;
  