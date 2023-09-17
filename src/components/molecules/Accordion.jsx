import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretUp, CaretDown, BriefCase, Plus, GradCap } from "../../styles/fontAwesome";

// eslint-disable-next-line react/prop-types
function Accordion({isActive, accordionTitle, accordionContent, handleClick, type}) {
    return (
        <div className='accordion'>
            <div 
                className="accordion-title flex justify-between items-center pr-4"
                onClick={handleClick}
            >
                <h2 className="font-bold text-2xl py-2">
                    <FontAwesomeIcon icon={type === 'educ' ? GradCap: BriefCase} className="mr-3"/>
                    {accordionTitle}
                </h2>
                <FontAwesomeIcon icon={!isActive ? CaretDown : CaretUp} className="text-blue-600 text-2xl" />
            </div>

            {isActive && type === 'expi' &&
                <div className="accordion-content">
                    <div className="flex flex-col gap-2 border-y-2 border-gray-200">
                        <p className="text-lg px-2 py-2">{accordionContent}</p>
                    </div>
                    <div className='addContext mx-auto flex justify-center mt-2'>
                        <button className='bg-gray-200 px-5 py-2 rounded-lg'>
                            <FontAwesomeIcon icon={Plus}/> Experience
                        </button>
                    </div>
                </div>
            }

            {isActive && type === 'educ' &&
                <div className="accordion-content">
                    <div className="flex flex-col gap-2 border-y-2 border-gray-200">
                        <div className="flex">
                            <h3 className="text-lg px-2 py-2 font-medium">Yale University</h3>
                            {/* <h5>Bachelor&apos;s in Computer Science</h5>
                            <h4>2021</h4> */}
                        </div>
                    </div>
                    <div className='addContext mx-auto flex justify-center mt-2'>
                        {/* <button className='bg-gray-200 px-5 py-2 rounded-lg'>
                            <FontAwesomeIcon icon={Plus}/> Experience
                        </button> */}
                    </div>
                </div>
            }
        </div>
    )
}

export default Accordion;