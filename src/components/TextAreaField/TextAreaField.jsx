import React from 'react';

function TextAreaField({ label, value, onChange,required }){
    return (
        <div>
            <label>{label}</label>
            <textarea value={value} onChange={onChange} required={required}  className='text'/>
        </div>
    );
}

export default TextAreaField;