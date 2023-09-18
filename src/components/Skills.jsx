/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Plus, Tools, Close} from "../styles/fontAwesome";

function Skills({skillSets, onAddSkills, onDeleteSkills}) {
    const [isFormActive, setIsFormActive] = useState(true);
    const [skillStacks, setSkillStacks] = useState('');

    const handleFormShow = () => {
        setIsFormActive(!isFormActive);
    }

    const handleAddSkill = () => {
        const newSkillsArr = skillStacks.split(',').map((skill) => skill.trim())
        onAddSkills(newSkillsArr);
        handleFormShow();
        setSkillStacks('');
    }

    const handleDeleteSkill = (index) => {
        const updatedSkills = [...skillSets];
        updatedSkills.splice(index, 1);
        onDeleteSkills(updatedSkills);
    }
    
    return (
        <div className='skills flex flex-col gap-3 bg-white px-6 py-6 rounded-lg'>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold"> <FontAwesomeIcon icon={Tools} className="mr-3"/>Skills</h2>
                {
                    isFormActive &&
                    <button className='cursor-pointer bg-gray-200 px-5 py-2 rounded-lg' onClick={handleFormShow}>
                        <FontAwesomeIcon icon={Plus}/> Skills
                    </button>
                }
            </div>
            {
                isFormActive &&
                <div className="max-h-[15rem] overflow-y-auto">
                    <ul className="flex flex-col gap-2">
                    {skillSets.map((skill, index) => {
                        return <li key={index} className="bg-gray-100 px-2 py-2">{skill}</li>
                    })}
                    </ul>
                </div>
            }
            { 
              !isFormActive &&
              <div className="flex flex-col">
                {   skillSets.length > 0 && 
                    (
                        <div>
                            <h1 className="font-bold text-lg mb-2">Current Skills </h1>
                            
                            <div className="flex flex-wrap gap-2 mb-2 py-4 px-4 bg-gray-100 rounded-md">
                                {
                                    skillSets.map((skill, index) => {
                                      return  (<div key={index} className="cursor-pointer flex items-center rounded-md gap-2 py-2 px-4 bg-white hover:bg-red-100 transition-all delay-100" onClick={() => handleDeleteSkill(index)}>
                                            <p id={index}>{skill}</p>
                                            <FontAwesomeIcon icon={Close} className="font-light"/> 

                                        </div>)
                                    })
                                }

                            </div>

                        </div>
                    )
                } 
                <div className="flex items-center gap-2">
                    <h1 className="font-bold text-lg">Add skill</h1>
                    <p className="font-light text-gray-600 text-sm">Please enter your skills (comma-separated)</p>
                </div>
                <div>
                    <textarea className="w-full px-4 py-4 resize-none h-20 border border-gray-400 rounded-lg mt-2"
                    value={skillStacks}
                    onChange={(e) => setSkillStacks(e.target.value)}
                    >

                    </textarea>
                </div>
                <div className="self-end flex gap-3 mt-2">
                    <button className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg" onClick={handleFormShow}>Cancel</button>
                    <button
                    className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                    disabled={skillStacks === ''}
                    onClick={handleAddSkill}
                    >
                    Add
                    </button>
                </div>
              </div>
            }
        </div>
    )
}

export default Skills;