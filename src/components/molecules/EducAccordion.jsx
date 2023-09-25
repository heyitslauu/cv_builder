/* eslint-disable react/prop-types */


import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretUp, CaretDown, GradCap} from "../../styles/fontAwesome";
import EducForm from "../EducForm";
import EducContent from "../EducContent";
import EducEditForm from "../EducEditForm";
function EducAccordion({isActive, handleAccordionChange, education, onAddEducation, educForm, onChangeInput, onResetForm, onDeleteEducation, onUpdateEducation}) {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editEducation, setEditEducation] = useState(null);
    

    const handleFormShow = () => {
        setIsFormVisible(!isFormVisible);
    }

    const handleEditExperience = (id) => {
        setEditEducation(id)
    }

    const handleDeleteEducation = (id) => {
        const indexToDelete = education.findIndex((education) => education.id == id);

        const updatedEducation = [...education];
        updatedEducation.splice(indexToDelete, 1);
        onDeleteEducation(updatedEducation);
    }


    const cancelEdit = () => {
        setEditEducation(null)
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
                            { editEducation == null &&
                                <EducContent
                                    education={education}
                                    handleFormShow={handleFormShow}
                                    handleDeleteEducation={handleDeleteEducation}
                                    handleEdit={handleEditExperience}
                                /> 
                            }

                            {
                                editEducation !== null && (
                                    <EducEditForm 
                                        onCancel={cancelEdit}
                                        onUpdateEducation={onUpdateEducation}
                                        education={education.find((educ) => educ.id == editEducation)}
                                    />
                                )
                            }
                             
                        </div>
                       
                    ) : 
                    (
                        <EducForm
                            onShowForm={handleFormShow}
                            educForm={educForm}
                            onChangeInput={onChangeInput}
                            onAddEducation={onAddEducation}
                            onResetForm={onResetForm}
                        />
        
                    )
                    }
                </div>
            }
        </div>
    )
    
}

export default EducAccordion;