import { useState } from "react";
/* eslint-disable react/prop-types */

import EducAccordion from "./molecules/EducAccordion";

function EducationSection({education}) {
    const [isActive, setIsActive] = useState(false);

    const handleAccordionChange = () => {
        setIsActive(!isActive);
    }
    return  (
        <div className='bg-white px-6 py-6 rounded-lg'>
            <EducAccordion 
                isActive={isActive} 
                education={education}
                handleAccordionChange={handleAccordionChange}
            />
        </div>
    )
}

export default EducationSection;