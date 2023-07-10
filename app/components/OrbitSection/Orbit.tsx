'use client'
import OrbitItem from './OrbitItem'
import { motion } from 'framer-motion'

interface OrbitProps {
  data: string[]
}
const Orbit: React.FC<OrbitProps> = ({ data }) => {
  return (
    <div className='  h-[28rem]  max-h-[100vw] w-full   relative'>
      <motion.div
        className='h-full w-full text-[0.75rem] md:text-[1.1rem]  '
        animate={{ rotate: [0, 360] }}
        transition={{ ease: 'linear', repeat: Infinity, duration: 30 }}
      >
        {Array(2)
          .fill(0)
          .map((item, index) => (
            <OrbitItem
              word={data[index]}
              rotation={(360 / 2) * index + 0}
              radius={3.5}
              key={index}
            />
          ))}
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <OrbitItem
              word={data[index + 2]}
              rotation={(360 / 5) * index + 320}
              radius={10}
              key={index + 3}
            />
          ))}
        {Array(9)
          .fill(0)
          .map((item, index) => (
            <OrbitItem
              word={data[index + 7]}
              rotation={(360 / 9) * index + 40}
              radius={15}
              key={index + 8}
            />
          ))}
      </motion.div>
    </div>
  )
}

export default Orbit
