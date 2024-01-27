import React, { useState, useCallback, useEffect } from 'react'
import {
  Column,
  Grouping,
  MasterDetail,
  DataGrid,
  SearchPanel,
  FilterRow,
} from 'devextreme-react/data-grid'

import { useDispatch, useSelector } from 'react-redux'
import { Button, Chip, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/system'
import MasterDetailGrid from './MasterDetailGrid.jsx'
// import ListCardSheep from './ListCardSheep.jsx'

import { myShipsAction } from '../../../actions/clientAction.js'
import ListCardSheep from './ListCardSheep.jsx'

import ModalShip from '../ModalShipmentClient/ModalShip.jsx'
const ListShip = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clientLogin = useSelector((state) => state.clientLogin)
  const { clientinfo } = clientLogin

  useEffect(() => {
    if (clientinfo) {
      dispatch(myShipsAction())
    } else {
      navigate('/loginclient')
    }
  }, [dispatch, navigate, clientinfo])

  const clientShips = useSelector((state) => state.clientShips)
  const { myships } = clientShips

  const [collapsed, setCollapsed] = useState(true)
  const onContentReady = useCallback(
    (e) => {
      if (collapsed) {
        e.component.expandRow(['EnviroCare'])
        setCollapsed(false)
      }
    },
    [collapsed],
  )

  //changer row color
  const getRowStyle = (e) => {
    // console.log(e.data)
    if (e.rowType === 'data') {
      if (e.data.firststep) {
        e.rowElement.style.backgroundColor = '#FFF5C2'
      }
      if (e.data.firststep && e.data.secondstep) {
        e.rowElement.style.backgroundColor = '#508D69'
      }
      if (e.data.firststep && e.data.secondstep && e.data.thirdstep) {
        e.rowElement.style.backgroundColor = '#BE3144'
      }
    }
  }

  //use theme for margin top (responsive thing)
  const theme = useTheme()

  //traitement of modal ship
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  //get id ship
  const [idship, setidship] = useState()

  //create button in cell render
  const renderGridCell = (data) => {
    const { data: rowData } = data

    // Check if 'secondstep' and 'thridstep' exists and is not null or undefined
    const isSecondStepExist =
      rowData.hasOwnProperty('secondstep') &&
      rowData.secondstep !== null &&
      rowData.secondstep !== undefined
    const isThirdStepExist =
      rowData.hasOwnProperty('thirdstep') &&
      rowData.thirdstep !== null &&
      rowData.thirdstep !== undefined

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ marginLeft: '5px' }}>{data.value}</div>
        {(!isSecondStepExist || !isThirdStepExist) && (
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              openModal()
              // console.log(rowData._id)
              setidship(rowData._id)
            }}
          >
            Complete shippment process
          </Button>
        )}
      </div>
    )
  }

  return (
    <>
      {isModalOpen && (
        <ModalShip
          handleClose={closeModal}
          handleOpen={openModal}
          open={isModalOpen}
          idship={idship}
          // updateShipmentList={updateShipmentList}
        />
      )}{' '}
      <ListCardSheep />
      <Grid m={4}>
        <Chip
          label="Chips in first Step"
          sx={{ backgroundColor: '#FFF5C2', marginRight: '7px' }}
        />
        <Chip
          label="Chips in second Step"
          sx={{
            backgroundColor: '#508D69',
            mt: theme.breakpoints.up('sm') ? '3px' : 0,
          }}
        />
      </Grid>
      <DataGrid
        dataSource={myships && myships}
        allowColumnReordering={true}
        // rowAlternationEnabled={true}
        showBorders={true}
        width="100%"
        keyExpr="_id"
        onContentReady={onContentReady}
        onRowPrepared={getRowStyle}
      >
        <Grouping autoExpandAll={false} />
        <Column
          dataField="fornisseuremail"
          allowUpdating={true}
          cellRender={renderGridCell}
        />
        <FilterRow visible={true} />
        <SearchPanel visible={true} />

        <MasterDetail
          enabled={true}
          component={MasterDetailGrid}
          data={myships && myships}
        />
      </DataGrid>
    </>
  )
}

export default ListShip
