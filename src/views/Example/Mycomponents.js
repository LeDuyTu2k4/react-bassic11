import React from "react";
import ChildComponents from "./ChildComponents";
import Addcomponents from "./Addcomponents";

class Mycomponent extends React.Component {

    state = {

        arrJobs: [
            { id: 'abcJobs1', title: 'Developer', salary: '500' },
            { id: 'abcJobs2', title: 'Testers', salary: '400' },
            { id: 'abcJobs3', title: 'Project manager', salary: '1000' }
        ]
    }


    addNewJob = (job) => {

        console.log('<<< check job from parent:', job)
        let currenJobs = this.state.arrJobs;
        currenJobs.push(job)
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currenJobs
        })
    }
    deleteAjob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }
    render() {
        console.log('>>> call render:', this.state)
        return (
            <>
                <Addcomponents
                    addNewJob={this.addNewJob}
                />

                <ChildComponents
                    arrJobs={this.state.arrJobs}
                    deleteAjob={this.deleteAjob}
                />

            </>
        )
    }
}

export default Mycomponent;