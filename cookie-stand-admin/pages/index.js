import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import ReportTable from '@/components/ReportTable';
import {useAuth} from "../contexts/auth"



export default function Home() {


  const {login} = useAuth(); 
  // const user = null;

  const user = { username: 'islam', password: 'islamislam' };

  const [data, setData] = useState([]);
  const numLocations = data.length;
  function submitHandler(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = data.length + 1;
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
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {/* Header */}
      <Header />
      <main className='flex flex-col items-center py-4 space-y-8 '>
        <button className='p-2 text-white bg-gray-500 rounded' onClick={()=>login("islam","islamislam")}>Login</button>
        {user ? <h2>Welcome {user.username}</h2> : <h2>Need to log in</h2>}
      </main>
    </>
  );
}




