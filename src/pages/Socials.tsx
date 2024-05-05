import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";
import spotify from "../images/spotify.png";
import x from "../images/behance.png";
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'

export default function Socials() {
  return (
    <div>
        <Navbar/>
        <Container>
            <div className="bg-purple-500 text-center h-screen text-white font-thin">
                <div className="p-5 text-4xl">
            My Socials
            </div>
            <div className="flex justify-between mr-36 ml-36 mt-20">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-900 dark:border-purple-700">
          <img
            className="rounded-t-lg pl-5 pt-5"
            src={Linkedin}
            height={100}
            width={100}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              LinkedIn
            </h5>

            <a
              href="https://www.linkedin.com/in/ishika-goswami-4b6996274/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm ml-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-900 dark:border-purple-700">
          <img
            className="rounded-t-lg pl-5 pt-5"
            src={spotify}
            height={380}
            width={100}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Spotify
            </h5>

            <a
              href="https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm ml-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-900 dark:border-purple-700">
          <img
            className="rounded-t-lg pl-5 pt-5"
            src={Github}
            height={100}
            width={100}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Github
            </h5>

            <a
              href="https://github.com/ishikaaaaa15"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm ml-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-900 dark:border-purple-700">
          <img
            className="rounded-t-lg pl-5 pt-5"
            src={x}
            height={100}
            width={100}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Behance
            </h5>

            <a
              href="https://twitter.com/sakshamsahore_"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
            </div>
        
        </Container>
      
    </div>
  )
}
