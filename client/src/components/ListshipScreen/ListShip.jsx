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
import { Chip, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/system'
import MasterDetailGrid from './MasterDetailGrid.jsx'
import ListCardSheep from './ListCardSheep.jsx'

import { shipListAction } from '../../actions/shipActions.js'
import Alerts from '../../layout/Alerts.jsx'

const ListShip = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userinfo } = userLogin
  const alertThing = useSelector((state) => state.alertThing)
  const { alert } = alertThing
  const navigate = useNavigate()
  useEffect(() => {
    if (userinfo && userinfo.isAdmin) {
      dispatch(shipListAction())
    } else {
      navigate('/')
    }
  }, [navigate, dispatch, userinfo])

  //get list sheep
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
  return (
    <>
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
        // rowAlternationEnabled={true}
        showBorders={true}
        width="100%"
        keyExpr="_id"
        onContentReady={onContentReady}
        onRowPrepared={getRowStyle}
      >
        <Grouping autoExpandAll={false} />
        <Column dataField="fornisseuremail" />
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
