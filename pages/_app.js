import { poppins } from '../font';
import '@/styles/globals.css'
import Loader from "@/components/Loader";
import { useState } from "react";
import { useEffect } from "react";
import Head from 'next/head';

import { ToastProvider } from 'react-toast-notifications'

export default function MyApp({ Component, pageProps }) {
  const [isloading, setIsloading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
  setIsloading(false)
}, 2000);
    }, [])
    
  return (
    <>
      <Head>
    <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="hack united,hack united company, hack united, hack united, hack united hackathon, hack united code, hack united help, hack united sponsor, hack united explore, hack united  hack united linkedin, hack united github"
        />
      <title>Hack United </title>
      <meta name="description" content="Hack United is a non-profit organization founded by teenagers with a passion for programming and technology. Our mission is to inspire and educate the next generation of innovators through education, collaboration, and events. Our workshops and hackathons provide a unique opportunity for participants to learn new skills, collaborate with like-minded individuals, and create innovative solutions to real-world problems. With a focus on inclusivity and accessibility, we strive to make technology accessible to everyone, regardless of their background or experience level." />
         <link rel="icon" href="../public/earth.png" type="image/x-icon"/>
         <meta property="og:image" content="../public/earth.png" />
        <meta name="author" content="Hack United" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
     
      `}</style>
      {isloading ? <Loader message={"HACK UNITED"}/> : 
      
      <>
      <ToastProvider placement='center'>
      <Component  {...pageProps} />
          </ToastProvider>

      </>
      
      }
    </>
  );
}