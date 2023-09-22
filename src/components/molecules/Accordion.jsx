/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretUp, CaretDown, BriefCase, GradCap,  } from "../../styles/fontAwesome";
import ExpiForm from "../ExpiForm";
import ExpiContent from "../ExpiContent"
import ExpiEditForm from "../ExpiEditForm";
// eslint-disable-next-line react/prop-types
function Accordion({isActive, accordionTitle, experiences, handleClick, type, expiForm, onFormChange, onAddExperience, onResetExperience, onUpdateExperience, onDeleteExperience}) {

    // const [isEducFormVisible, setisEducFormVisible] = useState(false);
    const [isExpiFormVisible, setisExpiFormVisible] = useState(false);
    // const [isEditFormActive, setIsEditFormActive] = useState(false);

    const handleShowExpiForm = () => {
        setisExpiFormVisible(!isExpiFormVisible);
    }


    const [editedExperienceId, setEditedExperienceId] = useState(null);

    const handleEditExperience = (id) => {
        setEditedExperienceId(id);
    };

    const cancelEditExperience = () => {
        setEditedExperienceId(null)
    }

    
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
                <FontAwesomeIcon icon={!isActive ? CaretDown : CaretUp} className="cursor-pointer text-blue-600 text-2xl" />
            </div>

            {isActive && type === 'expi' &&
                <div className="accordion-content">
                    { !isExpiFormVisible ? 
                    (
                        <div>
                            { editedExperienceId == null && (
                                <ExpiContent 
                                onShowForm={handleShowExpiForm} 
                                experiences={experiences}
                                onEditExperience={handleEditExperience}
                                onDeleteExperience={onDeleteExperience}
                                />
                                )
                            }
                             {editedExperienceId !== null && (
                                 <ExpiEditForm 
                                    experience={experiences.find((expi) => expi.id === editedExperienceId)}
                                    onEditCancel={cancelEditExperience}
                                    onUpdateExperience={onUpdateExperience}
                                />
                            )}
                           

                        </div>
                    ) : (
                        
                        <ExpiForm 
                            onShowForm={handleShowExpiForm} 
                            expiForm={expiForm} 
                            onFormChange={onFormChange} 
                            onAddExperience={onAddExperience}
                            onResetExperience={onResetExperience}
                        />
                    
                    )}

                    
                </div>
            }
        </div>
    )
}

export default Accordion;

//TODO: Separate Accordion for Education 
//TODO: Clean up props