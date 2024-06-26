
import { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
    const { label, onChange, id,errorMessage, ...inputProps } = props;

    const [focused,setFocused] = useState(false)

    const handleFocus = (e) =>{
      setFocused(true);
    }

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input 
            {...inputProps} onChange={onChange} onBlur={handleFocus} 
            onFocus={
              ()=>inputProps.name === 'confirmPassword' && setFocused(true)
               }
            focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;
