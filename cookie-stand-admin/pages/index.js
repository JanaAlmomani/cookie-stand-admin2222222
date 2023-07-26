import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import ReportTable from '@/components/ReportTable';



export default function Home() {
  
  const user = null;
  const userr = {username:'admin', password: 'admin'};

  const [data, setData] = useState([]);
  const numLocations = data.length;
  function submitHandler(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const id= data.length + 1;
    const entry = {
      location: form.get('location'),
      // minC: form.get('min'),
      // maxC: form.get('max'),
      // avgC: form.get('avg'),
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    };
    
    setData([...data, entry]);
  }

  return (
    <>
    <Head >
      <title>Cookie Stand Admin</title>
    
    </Head>
      {/* Header */}
      <Header />
      <main className='flex flex-col items-center py-4 space-y-8 '>
        
        {/* form */}
        <Form handler={submitHandler}/>
        {/* <h3 className="text-2xl text-gray-500">
          {data ? JSON.stringify(data) : "Report Table Coming Soon..."}
        </h3> */}
        <ReportTable reports={data} />
      </main>
      {/* Footer  */}
      <Footer numLocations={data.length} />
    </>
  );
}




