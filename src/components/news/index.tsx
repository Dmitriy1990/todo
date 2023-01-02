import React, { useContext } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getNews } from '../../api/todo'
import { motion } from 'framer-motion'
import { MainContext } from '../../context/MainContext'

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear',
      },
    },
  },
}

export const News = () => {
  const { showNews } = useContext(MainContext)
  const { isLoading, error, data } = useQuery('news', getNews, { enabled: showNews })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error || !data) {
    return <div></div>
  }
  console.log('data', data[2].content)
  return (
    <div>
      <div className='marquee'>
        <motion.div className='track' variants={marqueeVariants} animate='animate'>
          <h1>{data[2] && showNews ? data[2].content : ''}</h1>
        </motion.div>
      </div>
    </div>
  )
}
