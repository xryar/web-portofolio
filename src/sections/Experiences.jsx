import { Timeline } from "../components/Timeline"
import { experiences } from "../constants"

const Experiences = () => {
  return (
    <div id="experience" className="scroll-mt-24 w-full">
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experiences