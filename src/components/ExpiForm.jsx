/* eslint-disable react/prop-types */
function ExpiForm({onShowForm, expiForm, onFormChange, onAddExperience, onResetExperience}) {
    const handleExpiSubmit = (e) => {
        e.preventDefault();
        onAddExperience(expiForm)
        onResetExperience();
        onShowForm();
    }
    return (
        <div className="expiForm flex flex-col gap-2">
            <form onSubmit={handleExpiSubmit} autoComplete="off">
                <div className="formActual">
                    <label htmlFor="" className="flex items-center">
                        <span className="font-bold text-xl">Company Name</span>
                        <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                    </label>
                    <input 
                        type="text" 
                        className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                        value={expiForm.companyName || ''}
                        name='companyName'
                        id="companyName"
                        onChange={onFormChange}
                        required 
                    />

                    <label htmlFor="" className="flex items-center">
                        <span className="font-bold text-xl">Position</span>
                        <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                    </label>
                    <input 
                        type="text" 
                        className="w-full bg-gray-100 rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                        value={expiForm.companyPosition || ''}
                        onChange={onFormChange}
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
                                value={expiForm.startDate || ''}
                                name='startDate'
                                id="startDate"
                                onChange={onFormChange}
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
                                value={expiForm.endDate || ''}
                                name="endDate"
                                id='endDate'
                                onChange={onFormChange}
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
                            value={expiForm.location || ''}
                            name="location"
                            id="location"
                            onChange={onFormChange}
                            required 
                        />

                    <label htmlFor="" className="flex items-center">
                        <span className="font-bold text-xl">Responsibilities</span>
                        <span className="text-xs font-light ml-2 text-gray-600">Required</span>
                    </label>
                    <textarea 
                        className="w-full px-4 py-4 resize-none h-20  bg-gray-100 rounded-lg mt-2"
                        value={expiForm.description || ''}
                        name="description"
                        
                        id="description"
                        onChange={onFormChange}
                    >

                    </textarea>
                </div>
                
                
                <div className="flex gap-2">
                    <button className='ml-auto cursor-pointer border border-gray-300 px-4 py-2 rounded-lg' onClick={onShowForm}>Cancel</button>
                    <button type='submit' className="cursor-pointer bg-blue-600 font-bold text-white px-6 py-2 rounded-lg">Add</button>
                </div>
            </form>
        </div>
    )
}

export default ExpiForm;