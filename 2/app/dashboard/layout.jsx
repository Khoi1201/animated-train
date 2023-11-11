import React from 'react'
import Nav from '../ui/dashboard/nav/nav'

const Layout = ({children}) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
