function DisplaySkills() {
const skillItems =  ['Javascript', 'React', 'Redux', 'Tailwind', 'CSS', 'Node JS', 'PHP', 'Laravel', 'Git', 'AWS', 'Docker', 'Vue JS', ];
    return(
        <div className="w-4/5 mx-auto">
            <h1 className="bg-gray-200 py-2 px-2 font-black text-center uppercase text-xl">Skills</h1>
            <div className="flex flex-wrap gap-x-2 ">
                {skillItems.map((skill, index) => {
                    return <li key={index} className="font-light text-black py-2 px-2">{skill}</li>
                })}
            </div>
        </div>
    )
}

export default DisplaySkills;