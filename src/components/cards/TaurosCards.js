import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariant, parentVariant } from './motion'
import cardsData from './cardsData'
import NFTCard from './NFTCard'
import NFTModal from './NFTModal'
import { useInView } from 'react-intersection-observer'
import { Box, SimpleGrid, useDisclosure, IconButton } from '@chakra-ui/react'
// import styles from '../styles/MintButton.module.css'
// import TaurosDAOIcon from '@components/TaurosDAOIcon'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)
const MotionIconButton = motion(IconButton)

export default function RenderNFTCards() { 
  const [modalData, setModalData] = useState(null)
  const { isOpen, onToggle } = useDisclosure()

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
});

const buttonVariants = {
  initial: {
    scale: 1
  },
  whileInView: {
    scale: [1.5, 1],
    transition: {repeat: Infinity, type: "spring", duration: 2}
  },
  hover: {
    color: "#008080"
  },
  tap: {
    scale: 2
  }
}

  return (
    <Box
      py="40"
      position="relative"
      bgImage="url('/images/AbstractFuturisticDark.jpg')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
        <Box pt={20} pb={20} align="center" bgGradient="linear(to-r, whiteAlpha.300 50%, transparent)">
          <MotionSimpleGrid
            mt="4"
            minChildWidth="250px"
            minH="full"
            variants={parentVariant}
            animate={inView ? "animate" : "initial"}
            ref={ref}
          >
            {cardsData.map((product, i) => (
              <MotionBox variants={cardVariant} key={i}>
                <NFTCard product={product} setModalData={setModalData} />
              </MotionBox>
            ))}
            </MotionSimpleGrid>
            <NFTModal
              isOpen={modalData ? true : false}
              onClose={() => setModalData(null)}
              modalData={modalData}
            />
        </Box>
    </Box>
  );
}