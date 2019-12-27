import React, { useState } from 'react';
import CustomInput from '../Components/CustomInput'
import Form from './Form';
import '../CSS/Details.css'
import CustomTable from '../CustomTable/CustomTable';
import TRow from '../CustomTable/TRow';


export default function Details(props) {

    const [lists, setLists] = useState([{ date: "", temperatureC: 0, temperatureF: 0, summary: "" }])

    function list() {
        setLists(
            [
                { date: new Date(), temperatureC: 12, temperatureF: 1, summary: "Cool" },
                { date: new Date(), temperatureC: 12, temperatureF: 2, summary: "Cool" },
                { date: new Date(), temperatureC: 13, temperatureF: 2, summary: "Cool" },
                { date: new Date(), temperatureC: 15, temperatureF: 2, summary: "Cool" },
                { date: new Date(), temperatureC: 17, temperatureF: 6, summary: "Chilling" }
            ]
        )
    }
    let data = // props.data
    {
        name: "Name",
        password: "password",
        email: "mail@mail.com"
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Name">Name:</label>
                    </div>
                    <div className="col-75">
                        <label htmlFor="Name">{data.name}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Password">Password:</label>
                    </div>
                    <div className="col-75">
                        <label htmlFor="Password">{data.password}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Email">Email:</label>
                    </div>
                    <div className="col-75">
                        <label htmlFor="Email">{data.email}</label>
                    </div>
                </div>
                <div className="row">
                    <Form>
                        <CustomInput type="submit" value="Go Back" />
                    </Form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <CustomInput type="button" onClick={list} value="SHOW DATA" />
                </div>
                <div className="row">
                    {
                        lists[0].date !== "" ?
                            <CustomTable>
                                <TRow
                                    th={true}
                                    data={[
                                        "Date",
                                        "Time",
                                        "Summary",
                                        "Temperature *C",
                                        "Temperature *F"
                                    ]} />
                                {lists.map(
                                    (Element, i) => {
                                        return (
                                            <TRow
                                                key={i}
                                                data={
                                                    [
                                                        new Date(Element.date).toLocaleDateString(),
                                                        new Date(Element.date).toLocaleTimeString(),
                                                        Element.summary,
                                                        Element.temperatureC,
                                                        Element.temperatureF
                                                    ]
                                                }
                                            />
                                        )
                                    }
                                )}
                            </CustomTable>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    )
}