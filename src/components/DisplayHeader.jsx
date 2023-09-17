import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pin, Email, Phone } from "../styles/fontAwesome";
function DisplayHeader(){
    return (
        <div className="min-h-[10rem] bg-blue-900 text-white flex flex-col items-center justify-center">
            <h1 className="cv-owner text-3xl font-bold mb-4">John Doe</h1>
            <div className="flex gap-5">
                <p className="flex gap-3 items-center text-lg"><FontAwesomeIcon icon={Email} />johndoe@email.xyz</p>
                <p className="flex gap-3 items-center text-lg"><FontAwesomeIcon icon={Phone} />09123456789</p>
                <p className="flex gap-3 items-center text-lg"><FontAwesomeIcon icon={Pin} />New York City</p>
            </div>
        </div>
    )
}

export default DisplayHeader;