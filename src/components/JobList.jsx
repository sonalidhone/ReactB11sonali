import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JobList = () => {
    const [showdata, setshowdata] = useState([])
    const getdata = async () => {
        const res = await axios.get("http://localhost:3000/jobs")
        setshowdata(res.data);
    }
    useEffect(() => {
        getdata();
    }, [])

    const deletedata = async (id) => {
        const dele = await axios.delete(`http://localhost:3000/jobs/${id}`)
        const d = showdata.filter((e) => e.id !== dele)
        setshowdata(d)
        getdata();
    }
    return (
        <div>
            <table border="2px solid black">
                <thead>
                    <tr>

                        <td>Job_Number</td>
                        <td> Job_Title</td>
                        <td>Job_Start_Date</td>
                        <td> Job_Close_Date</td>
                        <td>  Experience_Required</td>
                        <td>  Number_Of_Openings</td>
                        <td>Job_Notes</td>
                        <td>Action</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        showdata.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.job_number}</td>
                                    <td>{e.job_title}</td>
                                    <td>{e.job_start_date}</td>
                                    <td>{e.job_close_date}</td>
                                    <td>{e.experience_required}</td>
                                    <td>{e.number_of_openings}</td>
                                    <td>{e.job_notes}</td>
                                    <td>
                                        <button onClick={() => deletedata(e.id)}>Delete</button>
                                        <button>Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default JobList
