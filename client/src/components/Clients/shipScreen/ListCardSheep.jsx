import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
// import sheets from '../../images/sheets.png'
import { shipNbrAction } from '../../../actions/userActions'
const ListCardSheep = () => {
  //get nbr sheep
  const nbrshipclient = useSelector((state) => state.nbrshipclient)
  const { nbrships } = nbrshipclient

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(shipNbrAction())
  }, [dispatch])

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
          <Avatar alt="sheets" sx={{ float: 'right' }} />
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
          <Avatar alt="sheets" sx={{ float: 'right' }} />
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
          <Avatar alt="sheets" sx={{ float: 'right' }} />
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
          <Avatar alt="sheets" sx={{ float: 'right' }} />
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
