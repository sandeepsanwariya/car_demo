import React, { useState, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import DropImage from './DropImage'
import Image from 'next/image'

export default function DragAndDrop({ images, setimages }) {
  const [preview, setPreview] = useState()

  const handleDrop = (acceptedFiles, fileRejections) => {
    console.log(acceptedFiles,'drag')
    setimages(acceptedFiles)
 
    if (fileRejections) {
      fileRejections.map(({ file, errors }) => {
        {
          errors.map(e => {
            console.log(e)
            notifyerorr('errimage', e.message)
          })
        }
      })
    }
  }
  useEffect(() => {

    preview?.map((p) => URL.revokeObjectURL(p))
    if (images?.length < 1) {
      setPreview([])
      return
    }
    const pre=[]
    images?.map((f) => {
  
      const objectUrl = URL.createObjectURL(f)
      pre.push(objectUrl)
    })
    setPreview(pre)
    // free memory when ever this component is unmounted
    return () => { preview?.map((p) => URL.revokeObjectURL(p)) }
  }, [images])

  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  return (<>
    <div className="w-[400px] h-[400px]">
      <Dropzone onDrop={handleDrop} maxFiles={1} accept="image/*" minSize={1024} maxSize={100000000}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            
            <div className="flex justify-center items-center float-right w-[400px] h-[400px]">
              {preview?.length == 0 && (<>
              
                <div className="w-11/12 mx-auto shadow rounded-2xl bg-surface ">
                  <div className="pt-2">
                    <DropImage />
             
                    <input {...getInputProps()} />
                  </div>
                  

                </div>
              </>)}
              <div className='bg-gray-700 w-[400px] h-[400px] p-4 pb-1 rounded-lg hover:bg-gray-900 hover:scale-105 ease-in-out duration-300 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black m-5 text-white'>
              {preview?.map((p) => (
                <div
                className='bg-gray-700 w-[400px] h-[400px] p-4 pb-1 rounded-lg hover:bg-gray-900 hover:scale-105 ease-in-out duration-300 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black m-5 text-white'>
            
                <Image width={'400px'} height={'400px'}  className='max-h-[400px] max-w-[400px] '   src={p}/></div>
        
        
       ))}
              </div>
          
             
              
            </div>
            
          </div>

        )}
      </Dropzone>
      
    </div>

     
    </>)
}
