import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Tile from '../components/tile'
import { Icon } from '@iconify/react';

export default function Restore() {
  return (
    <div className='h-auto w-100 flex flex-col items-center justify-center'>
      <Tile/>
    </div>
  )
}
