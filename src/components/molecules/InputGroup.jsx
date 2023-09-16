// eslint-disable-next-line react/prop-types
function InputGroup({labelText, onChange, value, id}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>
                <span className="font-bold text-2xl">{labelText}</span>
                <span className="text-xs font-light ml-2 text-gray-600">Required</span>
            </label>
            <input type="text"  className="w-full border-2 border-gray-400 px-2 py-2"
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