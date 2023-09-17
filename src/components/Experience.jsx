import { useState } from "react";

import Accordion from "./molecules/Accordion";

function Experience() {
    const [isActive, setIsActive] = useState(false);
    
    const handleAccordionChange = () => {
        setIsActive(!isActive)
    }
    return (
        <div className='bg-white px-6 py-6 rounded-lg'>
            <Accordion 
                isActive={isActive}
                accordionTitle='Experience'
                accordionContent='Lorem Ipsum'
                type='expi'
                handleClick={handleAccordionChange}
            />
        </div>
    )
}

export default Experience;