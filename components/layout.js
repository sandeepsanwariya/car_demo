import Header from "./header"

import React, {useEffect} from 'react'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='ease-in-out duration-300'>{children}</main>
    </>
  )
}

