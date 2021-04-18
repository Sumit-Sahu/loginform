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
        if (mail.match(mailformat)) {
            setformError({ ...formError, "emailError": null });
            return true;
        }
        else {
            setformError({ ...formError, "emailError": "Please enter a valid Email" });
            return false;
        }
    }

    const validatePassword = (pass) => {
        var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (pass.match(passformat)) {
            setformError({ ...formError, "passwordError": null });
            return true;
        }
        else {
            setformError({ ...formError, "passwordError": "Password must be 8 characters or more with at least one uppercase letter, one lowercase letter, one number and one special character" });
            return false;
        }
    }

    const onChange = e => {
        setformData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === "email") {
            validateEmail(e.target.value);
        }
        else if (e.target.name === "password") {
            validatePassword(e.target.value);
        }

    }
    const onsubmit = e => {
        e.preventDefault();
        if (validateEmail(email) && validatePassword(password)) {
            console.log(formData);
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <form className="form form-signin" onSubmit={e => onsubmit(e)}>
                                <h1 className="form-title">LOGIN</h1>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                    />
                                    {emailError && <p className="field-error">{emailError}</p>}
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={e => onChange(e)}
                                    />
                                    {passwordError && <p className="field-error">{passwordError}</p>}
                                </div>
                                <button className="btn btn-primary btn-lg btn-block" type="submit" >Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
