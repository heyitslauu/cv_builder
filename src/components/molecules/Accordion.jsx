/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretUp, CaretDown, BriefCase,  } from "../../styles/fontAwesome";
import ExpiForm from "../ExpiForm";
import ExpiContent from "../ExpiContent"
import ExpiEditForm from "../ExpiEditForm";

function Accordion({isActive, experiences, handleClick, expiForm, onFormChange, onAddExperience, onResetExperience, onUpdateExperience, onDeleteExperience}) {
    
    const [isExpiFormVisible, setisExpiFormVisible] = useState(false);
    const [editedExperienceId, setEditedExperienceId] = useState(null);

    const handleShowExpiForm = () => {
        setisExpiFormVisible(!isExpiFormVisible);
    }

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
                    <FontAwesomeIcon icon={BriefCase} className="mr-3"/>
                    Experience
                </h2>
                <FontAwesomeIcon icon={!isActive ? CaretDown : CaretUp} className="cursor-pointer text-blue-600 text-2xl" />
            </div>

            {isActive &&
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