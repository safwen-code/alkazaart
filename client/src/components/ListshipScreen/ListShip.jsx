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
import ListCardSheep from './ListCardSheep.jsx'

import { shipListAction } from '../../actions/shipActions.js'
import Alerts from '../../layout/Alerts.jsx'
import ModalShip from './ModalShip.jsx'

const ListShip = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userinfo } = userLogin
  const alertThing = useSelector((state) => state.alertThing)
  const { alert } = alertThing

  const navigate = useNavigate()

  //display list shipp
  useEffect(() => {
    if (userinfo && userinfo.isAdmin) {
      dispatch(shipListAction())
    } else {
      navigate('/')
    }
  }, [navigate, dispatch, userinfo])

  //get list sheep from redux
  const shipList = useSelector((state) => state.shipList)

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
    if (e.rowType === 'data') {
      if (e.data.firststep) {
        e.rowElement.style.backgroundColor = '#FFF5C2'
      }
      if (e.data.firststep && e.data.secondstep) {
        e.rowElement.style.backgroundColor = '#9DBC98'
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

  // update shipmentList and pass it like props
  const updateShipmentList = () => {
    dispatch(shipListAction())
  }
  return (
    <>
      {isModalOpen && (
        <ModalShip
          handleClose={closeModal}
          handleOpen={openModal}
          open={isModalOpen}
          idship={idship}
          updateShipmentList={updateShipmentList}
        />
      )}{' '}
      {<ListCardSheep userLogin={userLogin} />}
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
      {alert && <Alerts message={alert} />}
      <DataGrid
        dataSource={shipList && shipList.ships}
        allowColumnReordering={true}
        showBorders={true}
        width="100%"
        keyExpr="_id"
        onContentReady={onContentReady}
        onRowPrepared={getRowStyle}
      >
        <Grouping autoExpandAll={false} />

        <Column
          dataField="fornisseuremail"
          caption="Client Email"
          allowUpdating={true}
          cellRender={renderGridCell}
        ></Column>
        <FilterRow visible={true} />
        <SearchPanel visible={true} />

        <MasterDetail
          enabled={true}
          component={MasterDetailGrid}
          data={shipList.ships}
        />
      </DataGrid>
    </>
  )
}

export default ListShip
