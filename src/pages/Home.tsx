import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Container } from '@mui/material'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Container>
      <Box component="section">
        <div className="flex bg-purple-500 justify-center p-32">
        <div className="text-3xl font-thin  text-center pt-24 text-white">
        Hi there ! I am Ishika<br/>
        <div className="text-xl">UI/UX Developer</div>
        </div>
        <div>
            <div className="flex gap-5">
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p1} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p2} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
            </div>
            <br/>
            <div className="flex gap-5">
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p3} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p4} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
            </div>
        </div>
        </div>
      </Box>
      </Container>
    </div>
  )
}
