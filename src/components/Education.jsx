import { useState } from "react";
import Accordion from "./molecules/Accordion";

function EducationSection() {
    const [isActive, setIsActive] = useState(false);

    const handleAccordionChange = () => {
        setIsActive(!isActive);
    }
    return  (
        <div className='bg-white px-6 py-6 rounded-lg'>
            <Accordion 
                isActive={isActive}
                accordionTitle='Education'
                accordionContent='Yale University'
                type='educ'
                handleClick={handleAccordionChange}
            />
        </div>
    )
}

export default EducationSection;