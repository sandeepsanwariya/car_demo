import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import DragAndDrop from './DragAndDrop'
import { useState,useEffect } from 'react';
import Pic1 from './res/1.png'
import Pic2 from './res/2.png'
import Pic3 from './res/3.png'
import Pic4 from './res/4.png'
import { ClipLoader } from 'react-spinners';
export default function Tile() {
  const [images, setimages] = useState([])
  const [show, setshow] = useState(false)
  useEffect(() => {
    setshow(false)
    const timer = setTimeout(() => {
      setshow(true)
    }, 2000);
    return () => clearTimeout(timer);
  }, [images]);

  return (<>
  
     <div className='flex justify-center'>


      <div className='bg-gray-700 max-w-[700px]  h-auto p-4 pb-1 rounded-lg hover:bg-gray-900 hover:scale-105 ease-in-out duration-300 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black m-5 text-white' >
        <p className='text-xl italic' >UPLOAD IMAGE HERE</p>
        <div className='flex flex-row pt-2 align-bottom  justify-between w-full h-full'>
       
        <DragAndDrop images={images} setimages ={setimages}/>
        
   

      </div>
      </div>
      <br/>
      <br/>
      <br/>
      { images.length>0 && (<>
    
        <div className='bg-gray-700  h-auto p-4 pb-1 rounded-lg hover:bg-gray-900 hover:scale-105 ease-in-out duration-300 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black m-5 text-white' >
    
   
       <h2>Result</h2>
       {show ?(<>
        {images[0].name=='1.png' && (<>
         <Image width={'400px'} height={'400px'}  className='max-h-[400px] max-w-[400px] '    src={Pic1}/>
       </>)}
       {images[0].name=='2.png' && (<>
         <Image width={'400px'} height={'400px'}  className='max-h-[400px] max-w-[400px] '    src={Pic2}/>
       </>)}
       {images[0].name=='3.png' && (<>
         <Image width={'400px'} height={'400px'}  className='max-h-[400px] max-w-[400px] '    src={Pic3}/>
       </>)}
       {images[0].name=='4.png' && (<>
         <Image width={'400px'} height={'400px'}  className='max-h-[400px] max-w-[400px] '    src={Pic4}/>
       </>)}
       </>):(<>
        <ClipLoader color={"#1a2238"} loading={!show} size={250} /> 
          </>)}
     
     </div>

      </>)}
      </div>
     
             
      </>  )
}