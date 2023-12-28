

let FormFunction = (values)=>{
   let {name , password ,email , Cpassword} = values

  
    let error = {}
    let MailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 


    if(name ===''){
        error.names = "Please Enter your Name"
    }

    else if (name.length < 6){
        error.names = " Name Must Have 6 characters"
    }

    if(email === ''){
        error.Emails = 'Email Required !'
    }

   else if(!MailFormat.test(email)){
        error.Emails = 'Enter Valid Email  Address !'
    }

    if(password ===''){
        error.passwords = 'Enter your password'   
    }

    else if(password.length <= 8){
         error.passwords = 'password must contain at least one digit (0-9)'
    }

    if(Cpassword ===''){
        error.Cpasswords = 'Enter your  Confirm Password'    
    }
     
    else if(Cpassword !== password) {
        error.Cpasswords = 'password does\'t match'
    }
   
    return error 


}

export default FormFunction