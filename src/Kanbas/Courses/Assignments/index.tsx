import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import AssignmentHeader from "./AssignmentHeader";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHead from "./AssignmentHead";

export default function Assignments() {
  const { courseID } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <RxTriangleDown className="me-1 fs-3" />
            <strong>ASSIGNMENTS</strong>
            <AssignmentHeader />
          </div>


          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === courseID)
              .map((assignment: any) =>
                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between
                  align-items-center">
                  <AssignmentHead />
                  <div className="d-flex flex-column mx-3 me-auto">
                    <Link
                      className="wd-assignment-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${courseID}/Assignments/${assignment._id}`}
                    >
                      <div className="wd-assignment-description me-5">
                        <h5 className="fw-bold">{assignment.title}</h5>
                        <span className="text-danger small">Multiple Modules </span>
                        <span className="text-muted small"> | <strong> Not available until</strong></span>
                        <span className="text-muted small"> {assignment.available} |</span>&nbsp;<br />
                        <span className="text-muted small"> <strong>Due</strong></span>
                        <span className="text-muted small"> {assignment.due} | {assignment.points} pts</span>
                      </div>
                    </Link>
                  </div>
                  <AssignmentControlButtons />
                </li>
              )}
          </ul>


        </li>
      </ul>
    </div>
  );
}
