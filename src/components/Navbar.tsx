import '@fontsource/roboto/500.css';
import { Container } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <Container>
        <div className="flex justify-between font-thin text-xl p-3 bg-purple-500 text-white">
    <div><Link to="/">Ishika Goswami</Link></div>
    <div><Link to="/experience">Experience</Link></div>
    <div><a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener">Work</a></div>
    <div><a href="https://www.behance.net/ishikagoswami4/moodboards" target="_blank" rel="noopener">Case studies</a></div>
    <div><Link to="/socials">Socials</Link></div>
    <div>Resume</div>
    </div>
    </Container>
    </>
  )
}
