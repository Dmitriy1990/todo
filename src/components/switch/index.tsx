import * as React from 'react'
import { styled } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch, { SwitchProps } from '@mui/material/Switch'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 64.71,
  height: 32.09,
  padding: '1.66px 7px',
  margin: 0,
  '& .MuiSwitch-root': {
    margin: 0,
  },
  '& .MuiSwitch-switchBase': {
    margin: '3px 2.66px',
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(28px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z' fill='%23A9A9A9'/%3E%3C/svg%3E")`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#10C200',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#F4F4F4',
    width: 25.77,
    height: 25.77,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z' fill='%23A9A9A9'/%3E%3C/svg%3E")`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#366EFF',
    borderRadius: 20,
  },
}))

type Props = {
  checked: boolean
  onChange: () => void
}

export default function SwitchComponent({ checked, onChange }: Props) {
  return (
    <FormGroup>
      <MaterialUISwitch sx={{ m: 0 }} checked={checked} onChange={onChange} />
    </FormGroup>
  )
}
