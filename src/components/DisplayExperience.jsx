/* eslint-disable react/prop-types */
function DisplayExperience({experiences}) {
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="bg-gray-200 py-2 px-2 font-black text-center uppercase text-xl mb-2">Experience</h1>
            {experiences.map((expi) => {
                return (
                    <div key={expi.id}>
                        <div  className="grid grid-cols-[1fr_2fr] w-full">
                            <div className="expDuration">{expi.startDate} - {expi.endDate}</div>
                            <div className="expDescription">
                                <div>
                                    <h2 className="expCompany font-bold text-xl">{expi.companyName}</h2>
                                    <h3 className="expPosition text-gray-700 text-lg">{expi.companyPosition}</h3>
                                    <p>{expi.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}  
        </div>
    )
}

export default DisplayExperience;