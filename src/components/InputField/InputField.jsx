import React from "react";

function InputField({label ,type, value, onChange,required}) {
    return (
        <div>
            <label>{label}</label>
            
            <input type={type} value={value} onChange={onChange}required={required} className="input" />

        </div>
        
    );
}

export default InputField;