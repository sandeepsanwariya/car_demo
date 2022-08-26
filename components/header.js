import React,{useEffect} from 'react';
import Link from 'next/link'
import axios from 'axios'
function Header({props}) {
    useEffect(() => {

        axios.get('http://localhost:8000/user/check')
        .then(function (response) {
            console.log('res', response)
          const res={login:true,username:response.data}
          
        })
        .catch(function ({response}) {
            console.log('err', response)
          const res={login:false,username:null}
          
        })
      return () => {
      }
    }, [])
    
    console.log('pop',props)
    return (
        <>
<div className='h-30 w-ful bg-blue-500 text-white '>
<div className='font-bold italic text-xl flex align-center justify-center '>  Mask R-CNN COMPARISON  </div>
   <div className='pt-2 flex align-center justify-around'>
      
     
   </div>
   
    </div></>
    );
}

// export async function getServerSideProps() {
   
//     axios.get('http://localhost:8000/user/check')
//     .then(function (response) {
//         console.log('res', response)
//       const res={login:true,username:response.data}
//       return {
//         props: {res}, // Will be passed to the page component as props
//       }
//     })
//     .catch(function ({response}) {
//         console.log('err', response)
//       const res={login:false,username:null}
//       return {
//         props: {res}, // Will be passed to the page component as props
//       }
//     })
//     return {
//         props: {'ala':'alla'}, // Will be passed to the page component as props
//       }

//   }
export default Header;