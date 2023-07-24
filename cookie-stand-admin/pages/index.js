import Head from 'next/head';
import { useState } from 'react';

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
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {/* Header */}
      <Header />
      <main className='flex flex-col items-center py-4 space-y-8'>
        {/* form */}
        <Form handler={submitHandler} />
        <h3 className="text-2xl text-gray-500">
          {data ? JSON.stringify(data) : "Report Table Coming Soon..."}
        </h3>
      </main>
      {/* Footer  */}
      <Footer />
    </>
  );
}


function Header() {
  return (
    <header className="bg-green-500 p-4 text-black">
      <h1 className="text-4xl font-bold">Cookie Stand Admin</h1>
    </header>
  )
}

function Form(props) {
  return (
    <form
      className="flex flex-col items-center w-3/5 p-4 m-8 bg-green-300 rounded-md shadow-2xl text-black-500"
      onSubmit={props.handler}>
      <h2 className="mb-8 font-serif text-2xl font-bold text-black-500">Create Cookie Stand</h2>

      <label className="flex w-full gap-2 mb-12 text-black-500 font-serif">
        <span className="font-bold">Location</span>
        <input className="w-full text-black-500" type="text" name="location" />
      </label>

      <div className="flex flex-col gap-8 lg:flex-row font-serif">
        <label className="flex flex-col text-black-500">
          <span className="font-bold">Minimum Customers per Hour</span>
          <input className="text-black-500" type="number" name="min" />
        </label>
        <label className="flex flex-col text-black-500 font-serif">
          <span className="font-bold">Maximum Customers per Hour</span>
          <input className="text-black-500" type="number" name="max" />
        </label>
        <label className="flex flex-col text-black-500 font-serif">
          <span className="font-bold">Average Cookies per Sale</span>
          <input className="text-black-500" type="number" name="avg" />
        </label>

        <button className="p-8 bg-green-500 shadow-2xl text-black-500 hover:bg-green-700 font-bold font-serif" type="submit">
          Create
        </button>
      </div>


    </form>

  );
}

function Footer() {
  return (
    <footer className="p-6 mt-24 bg-green-500 text-gray-30 font-bold">
      &copy; 2023
    </footer>
  )
}