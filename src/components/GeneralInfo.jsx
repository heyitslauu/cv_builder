import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../styles/fontAwesome";
import InputGroup from "./molecules/InputGroup";

function GeneralInfo() {

    const [formInput, setFormInput] = useState({
       fullName: 'John Doe',
       email: 'johndoe@email.xyz',
       phone: '09123456789',
       address: 'New York City'
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        setFormInput({...formInput, [name] : value});
    }
    
    return (
        <div className="bg-white px-6 py-6 rounded-lg">
            <form className="flex flex-col">
                <h1 className='text-h1 text-2xl font-bold  mb-2 flex items-center'><FontAwesomeIcon icon={User} className="mr-3"/>Personal Details</h1>
                <InputGroup 
                    labelText='Full Name'
                    value={formInput.fullName || ''}  
                    onChange={handleInputChange}
                    id='fullName'
                />
                <InputGroup 
                    labelText='Email'
                    value={formInput.email || ''}  
                    onChange={handleInputChange}
                    id='email'
                />
                <InputGroup 
                    labelText='Phone'
                    value={formInput.phone || ''}  
                    onChange={handleInputChange}
                    id='phone'
                />
                <InputGroup 
                    labelText='Address'
                    value={formInput.address || ''}  
                    onChange={handleInputChange}
                    id='address'
                />
            </form>
        </div>
    )
}

export default GeneralInfo;