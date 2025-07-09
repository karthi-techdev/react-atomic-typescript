import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
     <main className='h-100dvh background-image'>
        {children} 
     </main>
  )
}

export default Layout;