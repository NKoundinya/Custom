import React, { useState } from 'react';
import CustomInput from '../Components/CustomInput'
import Form from './Form';
import '../CSS/Form.css'
import CustomTable from '../CustomTable/CustomTable';
import TRow from '../CustomTable/TRow';


export default function Details(props) {

    const [lists, setLists] = useState([{ date: "", temperatureC: 0, temperatureF: 0, summary: "" }])

    function list() {
        fetch('http://localhost:5000/weatherforecast')
            .then(res => res.json())
            .then(res => setLists(res))
    }
    let data = props.data
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Name">Name:</label>
                    </div>
                    <div className="col-75">
                        {data.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Password">Password:</label>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            {data.password}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Email">Email:</label>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            {data.email}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Form onSubmit={props.submitForm}>
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
                                                data={[
                                                    new Date(Element.date).toLocaleDateString(),
                                                    new Date(Element.date).toLocaleTimeString(),
                                                    Element.summary,
                                                    Element.temperatureC,
                                                    Element.temperatureF
                                                ]}
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