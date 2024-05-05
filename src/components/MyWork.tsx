import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
export default function MyWork() {
  return (
    <div className="bg-purple-500 ">
      <div className="">
        <div className="font-thin text-white text-center text-3xl p-10">Check out my work</div>
            <div className="flex gap-5 px-44 justify-between">
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p1} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p2} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
            </div>
            <br/>
            <div className="flex gap-5 px-44 pb-28 justify-between">
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p3} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
                <div>
                <a href="https://www.behance.net/ishikagoswami4/projects" target="_blank" rel="noopener"><img src={p4} className="rounded-xl transition-transform transform hover:scale-110" alt="p1" height={150} width={350}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}
