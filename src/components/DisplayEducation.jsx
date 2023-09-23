/* eslint-disable react/prop-types */
function DisplayEducation({education}) {
    return(
        <div className="w-4/5 mx-auto">
            <h1 className="bg-gray-200 py-2 px-2 font-black text-center uppercase text-xl mb-2">Education</h1>
            {education.map((educ) => {
                return (
                    <div key={educ.id}>
                        <div className="grid grid-cols-[1fr_2fr] w-full ">
                            <div className="educDuration">{educ.completionDate}</div>
                            <div className="educDescription">
                                <div>
                                    <h2 className="font-bold text-lg">{educ.school}</h2>
                                    <h3>{educ.degree}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default DisplayEducation;