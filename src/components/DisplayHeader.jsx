/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pin, Email, Phone } from "../styles/fontAwesome";
function DisplayHeader({formInput}){
    return (
        <div className="min-h-[10rem] bg-blue-900 text-white flex flex-col items-center justify-center">
            <h1 className="cv-owner text-3xl font-bold mb-4">{formInput.fullName}</h1>
            <div className="flex gap-5">
                <p className="flex gap-3 items-center text-lg"><FontAwesomeIcon icon={Email} />{formInput.email}</p>
                <p className="flex gap-3 items-center text-lg"><FontAwesomeIcon icon={Phone} />{formInput.phone}</p>
                <p className="flex gap-3 items-center text-lg"><FontAwesomeIcon icon={Pin} />{formInput.address}</p>
            </div>
        </div>
    )
}

export default DisplayHeader;