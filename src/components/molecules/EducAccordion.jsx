/* eslint-disable react/prop-types */


import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretUp, CaretDown, GradCap, Edit, Remove, Plus } from "../../styles/fontAwesome";
function EducAccordion({isActive, handleAccordionChange, education}) {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleFormShow = () => {
        setIsFormVisible(!isFormVisible);
    }

    return (
        <div className='accordion'>
            <div 
                className="accordion-title flex justify-between items-center pr-4"
                onClick={handleAccordionChange}
            >
                <h2 className="font-bold text-2xl py-2">
                    <FontAwesomeIcon icon={GradCap} className="mr-3"/>
                    Education
                </h2>
                <FontAwesomeIcon icon={!isActive ? CaretDown : CaretUp} className="cursor-pointer text-blue-600 text-2xl" />
            </div>

            {
                isActive && 
                <div className="accordion-content">
                    { !isFormVisible ? 
                    (
                        <div>
                            {education.map((educ) => {
                                return (
                                    <div key={educ.id} className="border-y-2 border-gray-200 flex items-center justify-between  pr-4">
                                    <div className="accordionContent py-2 ">
                                            <h3 className="text-xl font-bold">{educ.degree}</h3>
                                            <p className="text-md font-light text-gray-700">{educ.school}</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <button className="px-2 py-2 rounded-sm" >
                                                <FontAwesomeIcon icon={Edit} className="text-2xl cursor-pointer"/>
                                            </button>
                                            <button className="px-2 py-2 rounded-sm" >
                                                <FontAwesomeIcon icon={Remove} className="text-2xl text-red-600 cursor-pointer"/>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className='addContext mx-auto flex justify-center mt-2'>
                                <button className='cursor-pointer bg-gray-200 px-5 py-2 rounded-lg' onClick={handleFormShow}>
                                    <FontAwesomeIcon icon={Plus}/> Education
                                </button>
                            </div>
                        </div>
                    ) : 
                    (
                        <div>hello</div>
                    )
                    }
                </div>
            }
        </div>
    )
    
}

export default EducAccordion;