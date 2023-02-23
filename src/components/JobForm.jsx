import axios from 'axios';
import React, { useState } from 'react'

const JobForm = () => {
    const [job, setjob] = useState({

        job_number: "",
        job_title: "",
        job_start_date: "",
        job_close_date: "",
        experience_required: true,
        number_of_openings: 1,
        job_notes: ""
    })
    const handlesubmit = async (e) => {
        e.preventDefault();
        const s = await axios.post("http://localhost:3000/jobs", job)

    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                Job_Number: <input type="text" value={job.job_number} onChange={(e) => setjob({ ...job, job_number: e.target.value })} />
                Job_Title: <input type="text" value={job.job_title} onChange={(e) => setjob({ ...job, job_title: e.target.value })} />
                Job_Start_Date: <input type="date" value={job.job_start_date} onChange={(e) => setjob({ ...job, job_start_date: e.target.value })} />
                Job_Close_Date: <input type="date" value={job.job_close_date} onChange={(e) => setjob({ ...job, job_close_date: e.target.value })} />
                Experience_Required: <input type="text" value={job.experience_required} onChange={(e) => setjob({ ...job, experience_required: e.target.value })} />
                Number_Of_Openings: <input type="text" value={job.number_of_openings} onChange={(e) => setjob({ ...job, number_of_openings: e.target.value })} />
                Job_Notes: <input type="text" value={job.job_notes} onChange={(e) => setjob({ ...job, job_notes: e.target.value })} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default JobForm
