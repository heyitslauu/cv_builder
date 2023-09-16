import { useState } from "react";
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
        <div>
            <form className="flex flex-col gap-3">
                <h1 className='text-h1 text-3xl font-bold mb-2'>Personal Details</h1>
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