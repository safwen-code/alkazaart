import React, { useState, useCallback, useEffect } from 'react'
import { DataGrid, Column, Grouping } from 'devextreme-react/data-grid'

const MasterDetailGrid = ({ data }) => {
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
  const {
    data: { firststep, secondstep, thirdstep },
  } = data

  return (
    <>
      {firststep && (
        <div>
          {firststep && (
            <div>
              <h5>First Step</h5>
              <DataGrid
                dataSource={[firststep]}
                showBorders={true}
                style={{ marginBottom: '10px' }}
                allowColumnReordering={true}
                rowAlternationEnabled={true}
                width="100%"
                keyExpr={[firststep._id]}
                onContentReady={onContentReady}
              >
                <Grouping autoExpandAll={false} />
                <Column dataField="trackingnumber" />
                <Column dataField="shipper" />
                <Column dataField="bookingdate" type="date" />
                {!isSmallScreen && <Column dataField="coosignereference" />}
                {!isSmallScreen && <Column dataField="shipperInvoice" />}
                {!isSmallScreen && <Column dataField="incotern" />}
                {!isSmallScreen && <Column dataField="commodites" />}
                {!isSmallScreen && <Column dataField="packages" />}
                {!isSmallScreen && <Column dataField="weight" type="number" />}
                {!isSmallScreen && <Column dataField="deliveryterms" />}
              </DataGrid>
            </div>
          )}
          {secondstep && (
            <div>
              <h5>Second Step </h5>
              <DataGrid
                dataSource={[secondstep]}
                showBorders={true}
                style={{ marginBottom: '10px' }}
                keyExpr={[secondstep._id]}
              >
                <Column dataField="date"></Column>
                <Column dataField="orderstatus"></Column>
                <Column dataField="scheduled"></Column>
                <Column dataField="pickedmars"></Column>
                {!isSmallScreen && <Column dataField="delevered"></Column>}
                {!isSmallScreen && <Column dataField="pickelocation"></Column>}
                {!isSmallScreen && <Column dataField="etdIstanbul"></Column>}
                {!isSmallScreen && <Column dataField="CMR"></Column>}
                {!isSmallScreen && <Column dataField="trailer"></Column>}
              </DataGrid>
            </div>
          )}
          {thirdstep && (
            <div>
              <h5>Third Step </h5>
              <DataGrid
                dataSource={[thirdstep]}
                showBorders={true}
                keyExpr={[thirdstep._id]}
              >
                <Column dataField="etaSete"></Column>
                <Column dataField="etdMarseille"></Column>
                <Column dataField="etaRades"></Column>
                {!isSmallScreen && <Column dataField="etdAtvyl"></Column>}
                {!isSmallScreen && <Column dataField="customeredd"></Column>}
                {!isSmallScreen && <Column dataField="comment"></Column>}
              </DataGrid>
            </div>
          )}
        </div>
      )}
    </>
  )
}
export default MasterDetailGrid
