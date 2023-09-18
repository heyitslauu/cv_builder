import { useState } from "react";

import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';

//Live Display Components
import DisplayHeader from './components/DisplayHeader';
import DisplaySkills from './components/DisplaySkills';
import DisplayExperience from './components/DisplayExperience';
import DisplayEducation from './components/DisplayEducation';


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: 'John Doe',
    email: 'johndoe@email.xyz',
    phone: '09123456789',
    address: 'New York City'
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setGeneralInfo({...generalInfo, [name] : value});
  }

  const defaultSkills = ['Javascript', 'React', 'Redux', 'Tailwind', 'CSS', 'Node JS', 'Express JS', "Mongo DB"];
  const [skillSet, setSkillSet] = useState(defaultSkills);

  const handleAddNewSkills = (newSkills) => {
    //update previous state with new state by spread operation
    setSkillSet((prevSkillSet) => [...prevSkillSet, ...newSkills]);
  }

  const handleDeleteSkills = (updatedSkills) => {
    setSkillSet(updatedSkills);
  }

  return (
    <div className="px-6 py-6 grid gap-4 grid-cols-2 bg-gray-200">
      <div className='editable rounded-md flex flex-col gap-4'>
        <GeneralInfo formInput={generalInfo} onInputChange={handleInputChange}/>
        <Skills skillSets={skillSet} onAddSkills={handleAddNewSkills} onDeleteSkills={handleDeleteSkills}/>
        <Experience/>
        <EducationSection/>
      </div>
      <div className="liveDisplay bg-white flex flex-col gap-4">
        <DisplayHeader formInput={generalInfo}/>
        <DisplaySkills skillSets={skillSet}/>
        <DisplayExperience/>
        <DisplayEducation/>
      </div>
      
    </div>
  )
}

export default App
