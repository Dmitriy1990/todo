import React, { FC } from 'react'
import Paper from '@mui/material/Paper'

type Props = {
  color: string
}

export const ColorBlock: FC<Props> = ({ color }) => {
  return (
    <Paper
      elevation={0}
      sx={{ height: 40, width: 5, background: color, marginRight: '14px', borderRadius: '3px' }}
    />
  )
}
