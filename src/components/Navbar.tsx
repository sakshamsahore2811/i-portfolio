import '@fontsource/roboto/500.css';
import { Container } from '@mui/material'

export default function Navbar() {
  return (
    <>
    <Container>
        <div className="flex justify-between font-thin text-xl p-3 bg-purple-500 text-white">
    <div>Ishika Goswami</div>
    <div>Experience</div>
    <div><a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener">Work</a></div>
    <div><a href="https://www.behance.net/ishikagoswami4/moodboards" target="_blank" rel="noopener">Case studies</a></div>
    <div>Socials</div>
    <div>Resume</div>
    </div>
    </Container>
    </>
  )
}
