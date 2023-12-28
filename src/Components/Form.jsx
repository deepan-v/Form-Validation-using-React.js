import React, { useEffect } from "react";
import { useState ,useRef } from "react";
import FormFunction from "./FormDatas";
import Eye from 'bootstrap-icons/icons/eye.svg';
import Eyeclose from 'bootstrap-icons/icons/eye-slash.svg';


let FormValidation = ()=>{
    let [users , SetUsers] = useState({ name:'', email:'', password:'',Cpassword:'' })
     let [error , SetError] = useState('default')
     let [Icons , SetIcons] = useState(false)
     let [CloseIcons , SetCloseIcons] = useState(false)

     let HandelEye = ()=>{
        SetIcons(!Icons)
     }

     let HandleClose = ()=>{
         SetCloseIcons(!CloseIcons)
     }
      

     let HandleChange  = (e)=>{
       SetUsers({...users , [e.target.name] : e.target.value})
     }

     let ValidateForm = (e)=>{
        e.preventDefault()
        SetCloseIcons(false)
        SetIcons(false)
         SetError(FormFunction(users))
     }

    return (
          <div className="container" onSubmit={ValidateForm} >
        <form action="main.html" id="form">
                <h1>Register</h1>
                <pre style={{textAlign:'center', fontSize:'17px' ,marginBottom:'10px'}}>
                     { Object.keys(error).length ===0 &&<p style={{color:'green'}}>Successfully Submited</p>}
                     </pre>
                <div className ="inputitems">
                    <label htmlFor="name"> Name :</label>
                    <input type="text"
                     name="name" 
                     value={users.name}
                     placeholder="Enter Your Name."
                     id="name"
                     onChange={HandleChange}/>

                    <div className="error"style={{color:'red'}}> {error.names} </div>
                </div>

                <div className="inputitems">
                    <label htmlFor="email"> E-mail :</label>
                    <input type="text" 
                    name="email"
                    value={users.email}
                    placeholder="Enter Your E-Mail ID."
                    id="email"
                    onChange={HandleChange}/>

                   <div className="error"style={{color:'red'}}> {error.Emails }  </div>

                </div>
                <div className="inputitems">
                    <label htmlFor="password" className="password"> Password :</label>
                    
                    <input  type={Icons ? 'text':'password'}
                    name="password"
                    value={users.password}
                    placeholder="Enter Your Password"
                    id="password"
                    onChange={HandleChange}
                    />
                     {Icons ?
                      <img style={{width:'20px'}}onClick={HandelEye}
                        src={Eye} 
                        alt="" />
                        :
                        <img onClick={HandelEye}
                          style={{width:'20px'}}
                          src={Eyeclose} alt="" />
                         }

                    <div className="error"style={{color:'red'}}> {error.passwords} </div>

                </div>
                <div className="inputitems">
                    <label htmlFor="cpassword"> Confirm Password :</label>
                    <input  type={CloseIcons ? 'text':'password'} 
                    name="Cpassword" 
                     value={users.Cpassword}
                    placeholder=" Confirm Password " 
                    id="cpassword"
                    onChange={HandleChange}/>

                     {CloseIcons ?
                      <img style={{width:'20px'}}onClick={HandleClose}
                        src={Eye} 
                        alt="" />
                        :
                        <img onClick={HandleClose}
                          style={{width:'20px'}}
                          src={Eyeclose} alt="" />
                         }
                
                   <div className="error"style={{color:'red'}}> {error.Cpasswords} </div>
                </div>
                <button type="submit"> Submit </button>
        </form>  

    </div>
    )
}

export default FormValidation