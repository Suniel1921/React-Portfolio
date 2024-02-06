import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name : '',
        email: '',
        password: '',
    })

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/api/v1/auth/register`,formData)
            console.log(res)
            toast.success(res.data.message)
            //once form is submitted then form wiil be empty
            setFormData({
              name: '',
              email: '',
              password: '',
            })
            navigate('/')
            
        } catch (error) {
            toast.error(`something went wrong ${error}`)
            
        }
    }


  return (
    <>
      <div className="formContainer">
          <img className="registerImg" src="/img/login.png" alt="" />
          <form className="registerForm" onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleInputChange} />
            <button className="loginBtn" type="submit">Register</button>
            <p>Already Have an Account ? <Link to={'/login'}>Login Here</Link> </p>
          </form>
        </div>  
    </>
  )
}

export default Register