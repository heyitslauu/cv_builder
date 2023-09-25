/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Plus, Edit, Remove } from "../styles/fontAwesome";
function EducContent({education, handleDeleteEducation, handleFormShow, handleEdit}) {
    return (
        <div>
            {education.map((educ) => {
                return (
                    <div key={educ.id} className="border-y-2 border-gray-200 flex items-center justify-between  pr-4">
                    <div className="accordionContent py-2 ">
                            <h3 className="text-xl font-bold">{educ.degree}</h3>
                            <p className="text-md font-light text-gray-700">{educ.school}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button className="px-2 py-2 rounded-sm" onClick={() => handleEdit(educ.id)}>
                                <FontAwesomeIcon icon={Edit} className="text-2xl cursor-pointer"/>
                            </button>
                            <button className="px-2 py-2 rounded-sm" onClick={() => handleDeleteEducation(educ.id)}>
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
    )
}

export default EducContent;