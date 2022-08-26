import Link from 'next/Link'
import React,{useState} from 'react';
import axios from 'axios'
function login() {
    const [data, setdata] = useState({
        "email":"",
        "password":""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setdata(prevdata => ({
            ...prevdata,
            [name]: value
        }));
    }

    const [errorMsg, seterrorMsg] = useState('')

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const handleSubmit = (e) => {
       
        e.preventDefault()
        seterrorMsg('loading..')
        const d = data
        delete d.password2
        console.log(d)



        axios.post('http://localhost:8000/user/login/', d, { headers: headers })
            .then(function (res) {
                console.log(res)
            })
            .catch(({ response }) => {


                const err = response.data
                seterrorMsg(err)
            })
    
        
    }
    return (
        <div className=' w-screen h-screen flex items-center justify-center ' >
            <div className='hover:scale-105 ease-in-out duration-300 drop-shadow-2xl italic h-3/5 w-10/12 sm:w-3/4  md:w-1/2 rounded-xl xl:w-1/3 lg:w-1/3 bg-gray-400 flex flex-col items-center justify-center'>

            <p className='h-1/6 pt-4 text-xl  '>Login</p>
            <form onSubmit={(e)=>handleSubmit(e)} className=' h-full w-3/4 flex flex-col pt-12'>
     
                    <label className='text-left w-full text-gray-700 italic pl-1 pt-3' >Email</label>
                    <input onChange={handleChange}  className='rounded-xl' type="email" name="email" />
                    <label className='text-left w-full text-gray-700 italic pl-1 pt-3'>Password</label>
                    <input onChange={handleChange}  className='rounded-xl' type='password' name='password' />
                    <p className='text-sm text-gray-700'>{(errorMsg) ? (<>{errorMsg}</>) : ""}</p>
                    <button className=" hover:bg-blue-500 ease-in-out duration-300 ml-3 mr-3 rounded-xl text-xl text-gray-900 mt-5  h-10 bg-blue-400" >Submit</button>
            </form>
            <div className="text-lg text-gray-900" >
               <Link href='/signup' >Signup</Link></div>
            </div>
        </div>
    );
}

export default login;