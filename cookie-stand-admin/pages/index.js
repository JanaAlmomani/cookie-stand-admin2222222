import Head from 'next/head';
import { useState } from 'react';

import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';

export default function Home() {
  const [data, setData] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const entry = {
      location: form.get('location'),
      minC: form.get('min'),
      maxC: form.get('max'),
      avgC: form.get('avg'),
    };
    setData(entry);
  }

  return (
    <>
    <Head >
      <title>Cookie Stand Admin</title>
    
    </Head>
      {/* Header */}
      <Header />
      <main className='flex flex-col items-center py-4 space-y-8'>
        {/* form */}
        <Form handler={submitHandler} />
        {/* <h3 className="text-2xl text-gray-500">
          {data ? JSON.stringify(data) : "Report Table Coming Soon..."}
        </h3> */}
      </main>
      {/* Footer  */}
      <Footer />
    </>
  );
}




