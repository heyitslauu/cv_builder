function Skills() {
    const defaultSkills = ['Javascript', 'React', 'Redux', 'Tailwind', 'CSS', 'Node JS'];
    return (
        <div className='skills my-2 flex flex-col gap-2'>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Skills</h2>
                <button className="px-2 py-2 bg-blue-500 text-white rounded-sm">Add Skills</button>
            </div>
            <div className="max-h-[15rem] overflow-y-auto">
                <ul className="flex flex-col gap-2">
                {defaultSkills.map((skill, index) => {
                    return <li key={index} className="bg-gray-100 px-2 py-2">{skill}</li>
                })}
                </ul>
            </div>
        </div>
    )
}

export default Skills;