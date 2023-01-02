import { FC, ReactNode } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { ColorBlock } from '../ui/ColorBlock'

const AccordionUI = styled(Accordion)(({ theme }) => ({
  borderRadius: '25px !important',
  overflow: 'hidden',
  marginBottom: '32px',
  boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
  background: '#282828',
  '& .MuiPaper-root': {
    borderRadius: 25,
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 28,
    color: '#F4F4F4',
  },
  '& .MuiAccordionSummary-content': {
    alignItems: 'center',
    borderRadius: '25px',
  },
}))

type Props = {
  children: ReactNode
  title: string
}

export const AccordionComponent: FC<Props> = ({ children, title }) => {
  return (
    <AccordionUI>
      <AccordionSummary
        expandIcon={<Arrow />}
        aria-controls='panel1a-content'
        id='panel1a-header'
        sx={{
          background: '#282828',

          borderRadius: '25px',
          overflow: 'hidden',
        }}
      >
        <ColorBlock color='#A9A9A9' />
        <Typography
          sx={{
            fontSize: 24,
            lineHeight: '28px',
            fontWeight: 600,
            color: '#F4F4F4',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionUI>
  )
}
