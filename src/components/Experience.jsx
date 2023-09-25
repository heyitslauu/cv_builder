/* eslint-disable react/prop-types */
import { useState } from "react";

import Accordion from "./molecules/Accordion";

function Experience({experiences, expiForm, onFormChange, onAddExperience, onResetExperience, onUpdateExperience, onDeleteExperience}) {
    const [isActive, setIsActive] = useState(false);
    
    const handleAccordionChange = () => {
        setIsActive(!isActive)
    }
    return (
        <div className='bg-white px-6 py-6 rounded-lg'>
            <Accordion 
                isActive={isActive}
                experiences={experiences}
                expiForm={expiForm}
                onAddExperience={onAddExperience}
                onFormChange={onFormChange}
                onUpdateExperience={onUpdateExperience}
                onDeleteExperience={onDeleteExperience}
                onResetExperience={onResetExperience}
                handleClick={handleAccordionChange}
            />
        </div>
    )
}

export default Experience;