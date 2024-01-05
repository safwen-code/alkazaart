import React, { useState, useEffect } from 'react'
import { Alert } from '@mui/material'
import { useDispatch } from 'react-redux'
import { alertaction } from '../actions/alertAction'

const Alerts = ({ color, message }) => {
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    if (message) {
      setIsVisible(true)

      const timeoutId = setTimeout(() => {
        setIsVisible(false)
        dispatch(alertaction(''))
      }, 3000)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [message, dispatch])

  return (
    <>
      {isVisible && (
        <Alert
          severity={color}
          mt={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {message}!
        </Alert>
      )}
    </>
  )
}

export default Alerts
