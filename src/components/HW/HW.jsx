import { useState } from "react";
import InputField from "../InputField/InputField";
import TextAreaField from "../TextAreaField/TextAreaField";

function HW(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');


const handleSubmit=(e)=>{
e.preventDefault();
console.log({name,email,message});
};
return (
   <form onSubmit={handleSubmit} className="form">
    <InputField
    
    label='name'
    type='text'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    required
    />
    <InputField
    label='email'
    type='email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required
    />
    <TextAreaField
    label='message'
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    required
    />
    <button type='submit'>Submit</button>
   </form>
);
}
export default HW;