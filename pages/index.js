import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import Tile from '../components/tile';
import { useState,useEffect } from 'react';
import axios  from 'axios';

export default function Home() {
  let headers = new Headers();
  // headers.append('Access-Control-Allow-Origin',"*"),
  headers.append('Connection','Keep-alive' )
  headers.append('Content-Type', 'application/json; charset=utf-8')
  headers.append('Cookie', "cookie1=value; cookie2=value; cookie3=value;")




  

  return (
    <div className='h-auto w-200 flex flex-col items-center justify-center'>
     
      <Tile/>
    </div>
  )
}
