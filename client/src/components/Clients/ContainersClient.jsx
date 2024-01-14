import React from 'react'
import ListShip from './shipScreen/ListShip'
import CreateShip from './shipScreen/CreateShip'

const ContainersClient = ({ activeNavItem, setActiveNavItem }) => {
  return (
    <div className=" col-md-8 ">
      {activeNavItem === '/dashclient/myships' && <ListShip />}
      {activeNavItem === '/dashclient/suivieship' && <CreateShip />}
    </div>
  )
}

export default ContainersClient
