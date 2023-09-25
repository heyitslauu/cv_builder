/* eslint-disable react/prop-types */

import { useState } from "react";
function EducEditForm({education, onCancel, onUpdateEducation}) {
    const [editEducation, setEditEducation] = useState(education);

    const handleEducationSubmit = (e) => {
        e.preventDefault();
        console.log('1')
        onUpdateEducation(editEducation)
    }


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditEducation({
            ...editEducation, [name] : value
        })
    }
    return (
        <div>
            <form autoComplete="off" onSubmit={handleEducationSubmit}>
                <label htmlFor="school" className="flex items-center">
                    <span className="font-bold text-xl">University</span>
                    <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                </label>
                <input 
                    type="text" 
                    className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                    value={editEducation.school || ''}
                    name='school'
                    id="school"
                    onChange={handleInputChange}
                    required 
                />
                <label htmlFor="degree" className="flex items-center">
                    <span className="font-bold text-xl">Degree</span>
                    <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                </label>
                <input 
                    type="text" 
                    className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                    value={editEducation.degree || ''}
                    name='degree'
                    id="degree"
                    onChange={handleInputChange}
                    required 
                />
                <label htmlFor="completionDate" className="flex items-center">
                    <span className="font-bold text-xl">Completion Date</span>
                    <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                </label>
                <input 
                    type="text" 
                    className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                    value={editEducation.completionDate || ''}
                    name='completionDate'
                    id="completionDate"
                    onChange={handleInputChange}
                    required 
                />
                <div className="flex gap-2 mt-3">
                    <button className='ml-auto cursor-pointer border border-gray-300 px-4 py-2 rounded-lg' onClick={onCancel}>Cancel</button>
                    <button type='submit' className="cursor-pointer bg-blue-600 font-bold text-white px-6 py-2 rounded-lg">Save</button>
                </div>
           </form>
        </div>
    )
}

export default EducEditForm;