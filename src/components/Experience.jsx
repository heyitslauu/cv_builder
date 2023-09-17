import { useState } from "react";

import Accordion from "./molecules/Accordion";

function Experience() {
    const [isActive, setIsActive] = useState(true);
    
    const handleAccordionChange = () => {
        setIsActive(!isActive)
    }
    return (
        <Accordion 
            isActive={isActive}
            accordionTitle='Experience'
            accordionContent='Lorem Ipsum'
            handleClick={handleAccordionChange}
        />
    )
}

export default Experience;