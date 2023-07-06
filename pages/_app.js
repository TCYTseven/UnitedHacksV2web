import { poppins } from '../font';
import '@/styles/globals.css'
import Loader from "@/components/Loader";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

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
      <>

      <ToastContainer
          style={{ marginTop: "60px" }}
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Component  {...pageProps} />
      </>
      
      }
    </>
  );
}