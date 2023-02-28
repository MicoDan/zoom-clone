import toast from 'react-hot-toast'

export async function usernameValidate(values){
    const errors = usernameVerify({}, values)

    return errors
}

export async function registerValidation (values){
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)

    return errors
}


export async function passwordValidate(values){
    const errors = passwordVerify({}, values)

    return errors
}


export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values)

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("passwords do not match! ")
    }

    return errors
}


export async function ProfileValidation(values){
    const errors = emailVerify({}, values)
    return errors
}


//values as passed in the async function
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required....!')
    }

    return error.username
}

//validate passworde

function passwordVerify(errors = {}, values){

    const specialChars = /[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?~]/

    if(!values.password){
        errors.password = toast.error('password required....!')
    }else if(values.password.length < 4 ){
        errors.password = toast.error("password must be more than 4")
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("password must have special character")
    }

    return errors
}



function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error("Email Required!")
    }else if(!/@/.test(values.email)){
        error.email = toast.error("Invalid email address!")
    }

    return error
}

 