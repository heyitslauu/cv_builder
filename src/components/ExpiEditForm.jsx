/* eslint-disable react/prop-types */

import { useState } from "react";
function ExpiEditForm({experience, onEditCancel}) {


    const [editedExperience, setEditedExperience] = useState(experience);

    // Handle changes in form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('triggered')
        setEditedExperience({
        ...editedExperience,
        [name]: value,
        });
    };
    

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(editedExperience);
    }
    return (
        <div className="expiForm flex flex-col gap-2">
            <form autoComplete="off" onSubmit={handleSumbit}>
                <div className="formActual">
                    <label htmlFor="" className="flex items-center">
                        <span className="font-bold text-xl">Company Name</span>
                        <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                    </label>
                    <input 
                        type="text" 
                        className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                        value={editedExperience.companyName || ''}
                        name='companyName'
                        id="companyName"
                        onChange={handleInputChange}
                        required 
                    />

                    <label htmlFor="" className="flex items-center">
                        <span className="font-bold text-xl">Position</span>
                        <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                    </label>
                    <input 
                        type="text" 
                        className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                        value={editedExperience.companyPosition || ''}
                        onChange={handleInputChange}
                        id="companyPosition"
                        name='companyPosition'
                        required 
                    />    

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="" className="flex items-center">
                                <span className="font-bold text-xl">Start Date</span>
                                <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                            </label>
                            <input 
                                type="text" 
                                className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                                value={editedExperience.startDate || ''}
                                name='startDate'
                                id="startDate"
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="" className="flex items-center">
                                <span className="font-bold text-xl">End Date</span>
                                <span className="text-xs font-light ml-2 text-gray-600">Required </span>
                            </label>
                            <input 
                                type="text" 
                                className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                                value={editedExperience.endDate || ''}
                                name="endDate"
                                id='endDate'
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                    </div>

                    <label htmlFor="" className="flex items-center">
                        <span className="font-bold text-xl">Location</span>
                        <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                    </label>
                        <input type="text" 
                            className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                            value={editedExperience.location || ''}
                            name="location"
                            id="location"
                            onChange={handleInputChange}
                            required 
                        />

                    <label htmlFor="" className="flex items-center">
                        <span className="font-bold text-xl">Responsibilities</span>
                        <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                    </label>
                    <textarea 
                        className="w-full px-4 py-4 resize-none h-20  bg-gray-100 rounded-lg mt-2"
                        value={editedExperience.description || ''}
                        name="description"
                        onChange={handleInputChange}
                        id="description"
                        
                    >

                    </textarea>
                </div>
                
                
                <div className="flex gap-2">
                    <button className='ml-auto cursor-pointer border border-gray-300 px-4 py-2 rounded-lg' onClick={onEditCancel}>Cancel</button>
                    <button type='submit' className="cursor-pointer bg-blue-600 font-bold text-white px-6 py-2 rounded-lg">Save</button>
                </div>
            </form>
        </div>
    )
    
}

export default ExpiEditForm;