/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Plus, Edit, Remove } from "../styles/fontAwesome";


function ExpiContent({onShowForm, experiences, onEditExperience, onDeleteExperience}) {

    const handleDeleteExperience = (id) => {
        const updatedExperience = [...experiences];
        updatedExperience.splice(id, 1);
        onDeleteExperience(updatedExperience)
    }

    return (
        <div className="expiContainer">
            <div className="flex flex-col ">
               {experiences.map((expi) => {
                    return (<div key={expi.id} className="border-y-2 border-gray-200 flex items-center justify-between  pr-4">
                    <div className="accordionContent py-2 ">
                        <h3 className="text-xl font-bold">{expi.companyPosition}</h3>
                        <p className="text-md font-light text-gray-700">{expi.companyName}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button className="px-2 py-2 rounded-sm" onClick={() => onEditExperience(expi.id)}>
                            <FontAwesomeIcon icon={Edit} className="text-2xl cursor-pointer"/>
                        </button>
                        <button className="px-2 py-2 rounded-sm" onClick={() => handleDeleteExperience(expi.id)}>
                            <FontAwesomeIcon icon={Remove} className="text-2xl text-red-600 cursor-pointer"/>
                        </button>
                    </div>
                </div>)
               })}
            </div>
            <div className='addContext mx-auto flex justify-center mt-2'>
                <button className='cursor-pointer bg-gray-200 px-5 py-2 rounded-lg' onClick={onShowForm}>
                    <FontAwesomeIcon icon={Plus}/> Experience
                </button>
            </div>
        </div>
    )
}

export default ExpiContent;