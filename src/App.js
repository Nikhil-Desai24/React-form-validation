import FormInput from './components/FormInput';
import './App.css';
import { useState } from 'react';

function App() {
  const [values,setValues] = useState({
    username:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:''
  })

  const inputs=[
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Username',
      errorMessage:'Username should be 3-16 chars and should not include adny special chars ',
      label:'Username',
      pattern:'^[A-Za-z0-9]{2,16}$',
      required:true
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'Email',
      errorMessage:'It should be valid email address',
      label:'Email',
      required:true

    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Birthday',
      label:'Birthday'
    },
    {
      id:4,
      name:'password',
      type:'text',
      placeholder:'Password',
      errorMessage:'Password should be 8-16 chars and it should include 1 Number, 1 special char',
      label:'Password',
      pattern:"^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{8,20}$",
      required:true
    },
    {
      id:5,
      name:'confirmPassword',
      type:'text',
      placeholder:'ConfirmPassword',
      errorMessage:'Password do not match',
      label:'ConfirmPassword',
      required:true,
      pattern:values.password
    }
  ]


  
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
  }

  const onChange =(e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(

      <FormInput key={input.id} {...input} value={values[input.id]} onChange={onChange}/>
        ))}

      <button>Sumit</button>
      </form>
    </div>
  );
}

export default App;
