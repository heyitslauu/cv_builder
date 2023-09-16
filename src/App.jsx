import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {


  return (
    <div className="px-6 py-6 grid gap-4 grid-cols-2 bg-gray-200">
      <div className='editable bg-white px-6 py-6 rounded-md'>
        <GeneralInfo/>
        <Skills/>
        <Experience/>
        <EducationSection/>
      </div>
      <div className="liveDisplay">
        <h2>Hello</h2>
      </div>
      
    </div>
  )
}

export default App
