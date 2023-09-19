import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import GeneralInfo from './components/GeneralInfo';
// import EducationSection from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';

//Live Display Components
import DisplayHeader from './components/DisplayHeader';
import DisplaySkills from './components/DisplaySkills';
import DisplayExperience from './components/DisplayExperience';
import DisplayEducation from './components/DisplayEducation';


function App() {

  //General Infor Props
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

  //Skill Set Props
  // const defaultSkills = ['Javascript', 'React', 'Redux', 'Tailwind', 'CSS', 'Node JS', 'Express JS', "Mongo DB"];
  const defaultSkills = ['Javascript', ];
  const [skillSet, setSkillSet] = useState(defaultSkills);

  const handleAddNewSkills = (newSkills) => {
    //update previous state with new state by spread operation
    setSkillSet((prevSkillSet) => [...prevSkillSet, ...newSkills]);
  }

  const handleDeleteSkills = (updatedSkills) => {
    setSkillSet(updatedSkills);
  }

  //Experience Props

  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: uuidv4(),
      companyName: 'NetClicks',
      companyPosition: 'Full Stack Engineer',
      startDate: '4/2022',
      endDate: '4/2023',
      location: 'Canada',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora impedit asperiores quidem sed?'
    },
    {
      id: uuidv4(),
      companyName: 'Instakilo',
      companyPosition: 'Full Stack Engineer',
      startDate: '4/2021',
      endDate: '4/2022',
      location: 'Canada',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora impedit asperiores quidem sed?'
    },
  ])
  
  const [expiInfo, setExpiInfo] = useState({
    id: uuidv4(), // Generate a unique ID
    companyName: '',
    companyPosition: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  })

  const resetExpiForm = () => {
    // console.log("Hello")
    setExpiInfo({
      id: uuidv4(), // Generate a unique ID
      companyName: '',
      companyPosition: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
  };
  const handleExpiFormInput = (e) => {
    const {name, value} = e.target;
    setExpiInfo({...expiInfo, [name] : value});
  }
  const addExperience = (newExperience) => {
    setExperienceInfo((prevExperienceInfo) => [...prevExperienceInfo, newExperience])
  }

 

  return (
    <div className="px-6 py-6 grid gap-4 grid-cols-2 bg-gray-200">
      <div className='editable rounded-md flex flex-col gap-4'>
        <GeneralInfo formInput={generalInfo} onInputChange={handleInputChange}/>
        <Skills skillSets={skillSet} onAddSkills={handleAddNewSkills} onDeleteSkills={handleDeleteSkills}/>
        <Experience 
          experiences={experienceInfo} 
          expiForm={expiInfo} 
          onFormChange={handleExpiFormInput} 
          onAddExperience={addExperience}
          // onEditExperience={handleEditExperience}
          onResetExperience={resetExpiForm}
          
        />
        {/* <EducationSection/> */}
      </div>
      <div className="liveDisplay bg-white flex flex-col gap-4">
        <DisplayHeader formInput={generalInfo}/>
        <DisplaySkills skillSets={skillSet}/>
        <DisplayExperience experiences={experienceInfo} />
        <DisplayEducation/>
      </div>
      
    </div>
  )
}

export default App
