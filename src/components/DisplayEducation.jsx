function DisplayEducation() {
    return(
        <div className="w-4/5 mx-auto">
            <h1 className="bg-gray-200 py-2 px-2 font-black text-center uppercase text-xl mb-2">Education</h1>
            <div className="grid grid-cols-[1fr_2fr] w-full ">
                <div className="educDuration">4/2017 - 4/2021</div>
                <div className="educDescription">
                    <div>
                        <h2 className="font-bold text-lg">Yale University</h2>
                        <h3>Bachelor&apos;s in Computer Science</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayEducation;