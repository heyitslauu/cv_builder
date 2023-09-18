function DisplayExperience() {
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="bg-gray-200 py-2 px-2 font-black text-center uppercase text-xl mb-2">Experience</h1>
            <div className="grid grid-cols-[1fr_2fr] w-full ">
                <div className="expDuration">4/2023 - Present</div>
                <div className="expDescription">
                    <div>
                        <h2 className="expCompany font-bold text-lg">John Doe Consulting</h2>
                        <h3 className="expPosition">Front End Engineer</h3>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At explicabo pariatur facilis tempore!</li>   
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At explicabo pariatur facilis tempore!</li>   
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] w-full ">
                <div className="expDuration">4/2022 - 6/2023</div>
                <div className="expDescription">
                    <div>
                        <h2 className="expCompany font-bold text-lg">Doe John Consulting</h2>
                        <h3 className="expPosition">Full Stack Engineer</h3>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At explicabo pariatur facilis tempore!</li>   
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At explicabo pariatur facilis tempore!</li>   
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default DisplayExperience;