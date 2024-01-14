import React, { useState, useEffect } from 'react'
import {
  DataGrid,
  Column,
  FilterRow,
  SearchPanel,
} from 'devextreme-react/data-grid'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Box } from '@mui/material'
import { clientListAction } from '../../actions/clientAction'

const ListClient = () => {
  //screen responsive thing
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const handleScreenResize = () => {
    setIsSmallScreen(window.innerWidth < 768) // Adjust the breakpoint as needed
  }

  useEffect(() => {
    handleScreenResize() // Set initial screen size
    window.addEventListener('resize', handleScreenResize)

    return () => {
      window.removeEventListener('resize', handleScreenResize)
    }
  }, [])
  //end responsive

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clientListAction())
  }, [dispatch])

  const clientList = useSelector((state) => state.clientList)
  const { clients } = clientList

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} p={1} mt={1}>
        {clients && (
          <DataGrid
            dataSource={clients}
            keyExpr="_id"
            showBorders={true}
            focusedRowEnabled={true}
          >
            <FilterRow visible={true} />
            <SearchPanel visible={true} />
            <Column dataField="name" />
            <Column dataField="email" />
            {!isSmallScreen && <Column dataField="createdAt" dataType="date" />}
          </DataGrid>
        )}
      </Box>
    </Container>
  )
}

export default ListClient
