import { poppins } from '../font';
import '@/styles/globals.css'
import Loader from "@/components/Loader";
import { useState } from "react";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const [isloading, setIsloading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
  setIsloading(false)
}, 2000);
    }, [])
    
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      {isloading ? <Loader message={"HACK UNITED"}/> : 
      <Component  {...pageProps} />
      }
    </>
  );
}