import axios from "axios";
import React, { Component } from "react";

class CourseList extends Component {
    state = {
        mycourses: []
    }

    componentDidMount() {
        console.log("componentDidMount");
        //const URL = "http://localhost:5500/myapi/mycourses";
        const URL = "/myapi/mycourses";
        axios.get(URL).then((myresponse) => {
            console.log(myresponse.data);
            this.setState({
                mycourses: myresponse.data
            });
        });
    }

    render() {
        const mycourseList = this.state.mycourses.map(
            (mycourse) => {
                return (
                    <tr key={mycourse.courseId}>
                        <td>{mycourse.courseId}</td>
                        <td>{mycourse.courseName}</td>
                        <td>{mycourse.duration}</td>
                        <td>{mycourse.trainer}</td>
                        <td>{mycourse.enrollments}</td>
                    </tr>
                );
            }
        );
        return (
            <div className="container">
                <h1 >Course List:</h1>
                <table className="table">
                    <thead>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Trainer</th>
                        <th>Enrollments</th>
                    </thead>
                    <tbody>
                        {mycourseList}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CourseList;