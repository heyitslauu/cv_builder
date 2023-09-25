import { useState } from "react";
/* eslint-disable react/prop-types */

import EducAccordion from "./molecules/EducAccordion";

function EducationSection({education, onAddEducation, educForm, onChangeInput, onResetForm, onDeleteEducation, onUpdateEducation}) {
    const [isActive, setIsActive] = useState(false);

    const handleAccordionChange = () => {
        setIsActive(!isActive);
    }
    return  (
        <div className='bg-white px-6 py-6 rounded-lg'>
            <EducAccordion 
                isActive={isActive} 
                education={education}
                onAddEducation={onAddEducation}
                handleAccordionChange={handleAccordionChange}
                educForm={educForm}
                onChangeInput={onChangeInput}
                onUpdateEducation={onUpdateEducation}
                onResetForm={onResetForm}
                onDeleteEducation={onDeleteEducation}
            />
        </div>
    )
}

export default EducationSection;