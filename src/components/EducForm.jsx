/* eslint-disable react/prop-types */
function EducForm({onShowForm, onAddEducation, educForm, onChangeInput, onResetForm}) {

    const handleEducationSubmit = (e) => {
        e.preventDefault();
        onAddEducation(educForm)
        onResetForm();
        onShowForm();
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
                    value={educForm.school || ''}
                    name='school'
                    id="school"
                    onChange={onChangeInput}
                    required 
                />
                <label htmlFor="degree" className="flex items-center">
                    <span className="font-bold text-xl">Degree</span>
                    <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                </label>
                <input 
                    type="text" 
                    className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                    value={educForm.degree || ''}
                    name='degree'
                    id="degree"
                    onChange={onChangeInput}
                    required 
                />
                <label htmlFor="completionDate" className="flex items-center">
                    <span className="font-bold text-xl">Completion Date</span>
                    <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                </label>
                <input 
                    type="text" 
                    className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                    value={educForm.completionDate || ''}
                    name='completionDate'
                    id="completionDate"
                    onChange={onChangeInput}
                    required 
                />
                <div className="flex gap-2 mt-3">
                    <button className='ml-auto cursor-pointer border border-gray-300 px-4 py-2 rounded-lg' onClick={onShowForm}>Cancel</button>
                    <button type='submit' className="cursor-pointer bg-blue-600 font-bold text-white px-6 py-2 rounded-lg">Add</button>
                </div>
           </form>
        </div>
    )
}

export default EducForm;