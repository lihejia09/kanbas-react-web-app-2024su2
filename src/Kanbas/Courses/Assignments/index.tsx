import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import AssignmentHeader from "./AssignmentHeader";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHead from "./AssignmentHead";

export default function Assignments() {
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
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between
            align-items-center">
              <AssignmentHead />
              <div className="d-flex flex-column mx-3 me-auto">
                <a className="wd-assignment-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  <div className="wd-assignment-description me-5">
                    <h4 className="fw-bold">A1</h4>
                    <span className="text-danger">Multiple Modules</span> |
                    <span className="text-muted"><strong> Not available until</strong></span>
                    <span className="text-muted"> May 6 at 12:00am |</span>&nbsp;<br />
                    <span className="text-muted"> <strong>Due</strong></span>
                    <span className="text-muted"> May 13 at 11:59pm | 100 pts</span>
                  </div>
                </a>
              </div>
              <AssignmentControlButtons />
            </li>


            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between
            align-items-center">
              <AssignmentHead />
              <div className="d-flex flex-column mx-3 me-auto">
                <a className="wd-assignment-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/124">
                  <div className="wd-assignment-description me-5">
                    <h4 className="fw-bold">A2</h4>
                    <span className="text-danger">Multiple Modules</span> |
                    <span className="text-muted"><strong> Not available until</strong></span>
                    <span className="text-muted"> May 13 at 12:00am |</span>&nbsp;<br />
                    <span className="text-muted"> <strong>Due</strong></span>
                    <span className="text-muted"> May 20 at 11:59pm | 100 pts</span>
                  </div>
                </a>
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between
            align-items-center">
              <AssignmentHead />
              <div className="d-flex flex-column mx-3 me-auto">
                <a className="wd-assignment-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/125">
                  <div className="wd-assignment-description me-5">
                    <h4 className="fw-bold">A3</h4>
                    <span className="text-danger">Multiple Modules</span> |
                    <span className="text-muted"><strong> Not available until</strong></span>
                    <span className="text-muted"> May 20 at 12:00am |</span>&nbsp;<br />
                    <span className="text-muted"> <strong>Due</strong></span>
                    <span className="text-muted"> May 27 at 11:59pm | 100 pts</span>
                  </div>
                </a>
              </div>
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
