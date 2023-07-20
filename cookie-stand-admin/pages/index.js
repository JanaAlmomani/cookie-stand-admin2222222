import Head from 'next/head';
import {useState} from 'react';


export default function Home() {

  const [data, setData] = useState([]);
  function submitHandler(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const entry = {
        location: form.get('location'),
        minC: form.get('minC'),
        maxC: form.get('maxC'),
        avgC: form.get('avgC'),
    };
    setData(entry);
}

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body>
        {/* Header */}
        <Header />
        <main className='flex flex-col items-center py-4 space-y-8'>
          {/* form */}
          <Form handler={submitHandler}/>

          {/* question section */}
          {/* <Question question={question}/> */}

          {/* <p className="text-4xl text-center">{answer}</p> */}

        </main>
        <footer className="p-4 mt-8 bg-green-500 text-gray-30 font-bold">
          &copy; 2023
        </footer>
      </body>
    </>
  )
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
    <form className="flex w-1/2 p-2 mx-auto my-4 bg-gray-200" >
 
    </form>
  )
}

