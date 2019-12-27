import React, { useState } from 'react';
import Form from './Form';
import CustomInput from './CustomInput';
import '../CSS/Form.css';
import Details from './Details';



export default function Home() {

    const [isClicked, setIsClicked] = useState(false)

    const [data, setData] = useState()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [enterPass, setEnterPass] = useState(false)
    const [enterEmail, setEnterEmail] = useState(false)
    const [enterName, setEnterName] = useState(false)

    function submitForm(e) {
        e.preventDefault();

        if (name === '') {
            setEnterName(true)
            setEnterEmail(false)
            setEnterPass(false)
            return false;
        }

        if (email === '') {
            setEnterName(false)
            setEnterEmail(true)
            setEnterPass(false)
            return false;
        }

        if (password === '') {
            setEnterName(false)
            setEnterEmail(false)
            setEnterPass(true)
            return false;
        }

        if (!(new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "igm").test(email))) {
            setEnterName(false)
            setEnterEmail(true)
            setEnterPass(false)
            return false;
        }


        setIsClicked(!isClicked)

        setEnterName(false)
        setEnterEmail(false)
        setEnterPass(false)

        setData({
            name: name,
            email: email,
            password: password
        })

        return true;
    }

    if (!isClicked) {
        return (
            <div>
                <div className="container">
                    <Form className="Form" onSubmit={submitForm}>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="name">Name:</label>
                            </div>
                            <div className="col-75">
                                <CustomInput
                                    type="text"
                                    onFocus={() => setEnterName(false)}
                                    onValueChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder={"Name"}
                                />
                            </div>
                            {enterName ? <label className="red">Enter Name</label> : <label></label>}
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="email">Email ID: </label>
                            </div>
                            <div className="col-75">
                                <CustomInput
                                    onFocus={() => setEnterEmail(false)}
                                    type="email"
                                    onValueChange={e => setEmail(e.target.value)}
                                    value={email}
                                    placeholder={"Email ID"}
                                />
                            </div>
                            {enterEmail ? <label className="red">Enter Proper Email</label> : <label></label>}
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Password">Password:</label>
                            </div>
                            <div className="col-75">
                                <CustomInput
                                    type="password"
                                    onFocus={() => setEnterPass(false)}
                                    onValueChange={e => setPassword(e.target.value)}
                                    value={password}
                                    placeholder={"Password"}
                                />
                            </div>
                            {enterPass ? <label className="red">Enter Password</label> : <label></label>}
                        </div>
                        <div className="row">
                            <CustomInput type="submit" value={"Login"} />
                        </div>
                    </Form>
                </div>
            </div>
        )
    } else {
        return (
            <Details data={data} submitForm={submitForm} />
        )
    }
}