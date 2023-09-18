/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../styles/fontAwesome";
import InputGroup from "./molecules/InputGroup";

function GeneralInfo({formInput, onInputChange}) {
    
    return (
        <div className="bg-white px-6 py-6 rounded-lg">
            <form className="flex flex-col">
                <h1 className='text-h1 text-2xl font-bold  mb-2 flex items-center'><FontAwesomeIcon icon={User} className="mr-3"/>Personal Details</h1>
                <InputGroup 
                    labelText='Full Name'
                    value={formInput.fullName || ''}  
                    onChange={onInputChange}
                    id='fullName'
                />
                <InputGroup 
                    labelText='Email'
                    value={formInput.email || ''}  
                    onChange={onInputChange}
                    id='email'
                />
                <InputGroup 
                    labelText='Phone'
                    value={formInput.phone || ''}  
                    onChange={onInputChange}
                    id='phone'
                />
                <InputGroup 
                    labelText='Address'
                    value={formInput.address || ''}  
                    onChange={onInputChange}
                    id='address'
                />
            </form>
        </div>
    )
}

export default GeneralInfo;