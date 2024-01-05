import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
import sheets from '../../images/sheets.png'

import { shipNbrAction } from '../../actions/shipActions.js'

const ListCardSheep = ({ userLogin }) => {
  //get nbr sheep
  const shipNbr = useSelector((state) => state.shipNbr)
  const { nbrships } = shipNbr

  const dispatch = useDispatch()
  const { userinfo } = userLogin

  useEffect(() => {
    if (userinfo) {
      dispatch(shipNbrAction())
    }
  }, [dispatch, userinfo])

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        '@media (max-width: 750px)': {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{ width: { xs: '90%', md: '20%' }, margin: { xs: 2, md: 0 } }}
      >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total Sheeps
          </Typography>
          <Avatar src={sheets} alt="sheets" sx={{ float: 'right' }} />
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: 28 }}>
            {/* {nbrships.totalShips} */}
            {nbrships && nbrships.totalShips}
          </Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{ width: { xs: '90%', md: '20%' }, margin: { xs: 2, md: 0 } }}
      >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total Sheeps In First Step
          </Typography>
          <Avatar src={sheets} alt="sheets" sx={{ float: 'right' }} />
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: 28 }}>
            {' '}
            {nbrships && nbrships.totalFirstStep}{' '}
          </Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{ width: { xs: '90%', md: '20%' }, margin: { xs: 2, md: 0 } }}
      >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total Sheeps In Second Step
          </Typography>
          <Avatar src={sheets} alt="sheets" sx={{ float: 'right' }} />
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: 28 }}>
            {nbrships && nbrships.totalSecondStep}{' '}
          </Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{ width: { xs: '90%', md: '20%' }, margin: { xs: 2, md: 0 } }}
      >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total completed Sheeps
          </Typography>
          <Avatar src={sheets} alt="sheets" sx={{ float: 'right' }} />
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: 28 }}>
            {nbrships && nbrships.totalThirdStep}{' '}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ListCardSheep
