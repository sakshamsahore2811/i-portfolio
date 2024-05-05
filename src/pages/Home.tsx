import MyWork from '../components/MyWork'
import Navbar from '../components/Navbar'
import { Box, Container } from '@mui/material'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Container>
      <Box component="section">
        <div className=" bg-purple-500 flex justify-center p-32">
        <div className="text-3xl font-thin  text-center p-16 text-white">
        Hi there ! I am Ishika<br/>
        <div className="text-xl">UI/UX Developer</div>
        </div>
        {/* <div className="border-2 border-dotted"><img src={ishika} height={300} width={200}  alt="pp" /></div> */}
        </div>
        <MyWork/>
      </Box>
      </Container>
    </div>
  )
}
