import React, { Fragment, useState } from 'react'

const Login = () => {
    const [formData, setformData] = useState({
        email: '',
        password: ''
    });
    const [formError, setformError] = useState({
        emailError: null,
        passwordError: null
    });
    const { email, password } = formData;
    const { emailError, passwordError } = formError;

    const validateEmail = (mail) => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(mail.match(mailformat)) {
            setformError({...formError, "emailError":null});
            return true;
        }
        else {
            setformError({...formError, "emailError":"Please enter a valid Email"});
            return false;
        }
    }

    const validatePassword = (pass) => {
        var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if(pass.match(passformat)) {
            setformError({...formError, "passwordError":null});
            return true;
        }
        else {
            setformError({...formError, "passwordError":"Password must be 8 characters or more with at least one uppercase letter, one lowercase letter, one number and one special character"});
            return false;
        }
    }

    const onChange = e => {
        setformData({ ...formData, [e.target.name]: e.target.value });
        if( e.target.name === "email") {
            validateEmail(e.target.value);
        }
        else if(e.target.name === "password") {
            validatePassword(e.target.value);
        }

    }
    const onsubmit = e => {
        e.preventDefault();
        if(validateEmail(email) && validatePassword(password)){
            console.log(formData);
        }
    }
    return (
        <Fragment>
            <div className="card">
            <form className="form" onSubmit ={ e => onsubmit(e)}>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                    { emailError && <p>{emailError}</p> }
                </div>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                    />
                    { passwordError && <p>{passwordError}</p> }
                </div>
                <input type="submit" />
            </form>
            </div>
        </Fragment>
    )
}

export default Login
