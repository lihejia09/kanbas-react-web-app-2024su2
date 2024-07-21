import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { FaMagnifyingGlass, FaChevronDown, FaFilter } from 'react-icons/fa6';
import GradesControls from './GradesControls';

export default function Grades() {
    const { courseID } = useParams();
    const assignments = db.assignments.filter((assignment: any) => assignment.course === courseID);
    const enrollments = db.enrollments.filter((enrollment: any) => enrollment.course === courseID);

    return (
        <div id="wd-grades">
            <GradesControls /><br /><br />

            <div className="wd-grades-search-row row mt-1">
                <div className="col">
                    <label className="form-check-label mb-1" htmlFor="wd-grades-search-students">
                        <b>Student Names</b>
                    </label>
                    <div className="input-group mb-2">
                        <span className="input-icon">
                            <FaMagnifyingGlass className="input-icon-left" />
                        </span>
                        <input type="text" className="form-control rounded" id="wd-grades-search-students" placeholder="Search Students" />
                        <span className="back-icon">
                            <FaChevronDown />
                        </span>
                    </div>
                </div>
                <div className="col">
                    <label className="form-check-label mb-1" htmlFor="wd-grades-search-assignments">
                        <b>Assignment Names</b>
                    </label>
                    <div className="input-group mb-2">
                        <span className="input-icon">
                            <FaMagnifyingGlass />
                        </span>
                        <input type="text" className="form-control rounded" id="wd-grades-search-assignments" placeholder="Search Assignments" />
                        <span className="back-icon">
                            <FaChevronDown />
                        </span>
                    </div>
                </div>
            </div>

            <div id="wd-grades-filter" className="text-nowrap my-2">
                <button className="btn btn-secondary">
                    <FaFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                    Apply Filters
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-light table-bordered">
                    <tbody className="text-center align-middle">
                        <tr>
                            <td className="text-start" >
                                <b>Student Name</b>
                            </td>
                            {assignments.map((assignment) => (
                                <td>{assignment.title}</td>
                            ))}
                        </tr>

                        {enrollments.map((enrollment) => {
                            const user = db.users.find(
                                (user) => user._id === enrollment.user
                            );
                            return (
                                <tr className="align-middle">
                                    <td className="wd-grades-student-name text-start text-danger">
                                        {user?.firstName} {user?.lastName}
                                    </td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) =>
                                                grade.assignment === assignment._id && grade.student === enrollment.user
                                        );
                                        return (
                                            <td>{grade?.grade || ""}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}