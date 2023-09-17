import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Plus, Tools } from "../styles/fontAwesome";

function Skills() {
    const defaultSkills = ['Javascript', 'React', 'Redux', 'Tailwind', 'CSS', 'Node JS'];
    return (
        <div className='skills flex flex-col gap-3 bg-white px-6 py-6 rounded-lg'>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold"> <FontAwesomeIcon icon={Tools} className="mr-3"/>Skills</h2>
                <button className='bg-gray-200 px-5 py-2 rounded-lg'>
                    <FontAwesomeIcon icon={Plus}/> Skills
                </button>
            </div>
            <div className="max-h-[15rem] overflow-y-auto">
                <ul className="flex flex-col gap-2">
                {defaultSkills.map((skill, index) => {
                    return <li key={index} className="bg-gray-100 px-2 py-2">{skill}</li>
                })}
                </ul>
            </div>
        </div>
    )
}

export default Skills;