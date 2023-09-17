// eslint-disable-next-line react/prop-types
function InputGroup({labelText, onChange, value, id}) {
    return (
        <div className="flex flex-col mb-2">
            <label htmlFor={id} className="flex items-center">
                <span className="font-bold text-xl">{labelText}</span>
                <span className="text-xs font-light ml-2 text-gray-600">Required</span>
            </label>
            <input type="text" className="w-full bg-gray-100 ounded-sm px-2 py-2"
                required 
                value={value}  
                name={id}
                id={id}
                onChange={onChange}
            />
        </div>
    )
}

export default InputGroup;