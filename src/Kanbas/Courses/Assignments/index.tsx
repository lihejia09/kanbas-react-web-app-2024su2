import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, editAssignment } from "./reducer";



export default function Assignments() {
  const { courseID } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const defaultAssignment = {
    title: "New Assignment",
    description: "New Assignment Description",
    course: courseID,
    points: 100,
    due: "",
    available: "",
    until: "",
  };
  const currentCourseAssignments = assignments.filter(
    (assignment: any) => assignment.course === courseID
  );
  const [assignmentToDelete, setAssignmentToDelete] = useState(currentCourseAssignments[0]);
  const dispatch = useDispatch();




  return (
    <div id="wd-assignments">
      <div id="wd-assignment-controls" className="text-nowrap">
        <Link to={`/Kanbas/Courses/${courseID}/Assignments/add`}>
          <button
            type="button"
            id="wd-add-assignment-btn"
            className="btn btn-lg btn-danger me-1 float-end"
            onClick={() => {
              dispatch(editAssignment(defaultAssignment));
            }}
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
        </Link>

        <button
          id="wd-add-group-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>


        <div className="d-flex align-items-center me-3">
          <div className="input-group" style={{ width: '300px', height: '50px' }}>
            <span className="input-group-text">
              <FaMagnifyingGlass />
            </span>
            <input id="wd-search-assignment" type="text" className="form-control" placeholder="Search..." />
          </div>
        </div>
      </div>

      <br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <RxTriangleDown className="me-1 fs-3" />
            <strong>ASSIGNMENTS</strong>
            <div className="float-end">
              <button className="oval-button">40% of Total</button>
              <BsPlus className="fs-1" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === courseID)
              .map((assignment: any) =>
                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between
                  align-items-center">
                  <div className="d-flex">
                    <BsGripVertical className="fs-3 me-3" />
                    <GiNotebook className="me-2 fs-3" style={{ color: 'green' }} />
                  </div>

                  <div className="d-flex flex-column mx-3 me-auto">
                    <Link
                      className="wd-assignment-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${courseID}/Assignments/${assignment._id}`}
                      onClick={() => {
                        dispatch(editAssignment(assignment));
                      }}
                    >
                      <div className="wd-assignment-description me-5">
                        <h5 className="fw-bold">{assignment.title}</h5>
                        <span className="text-danger small">Multiple Modules </span>
                        <span className="text-muted small"> | <strong> Not available until</strong></span>
                        <span className="text-muted small"> {assignment.available} |</span>&nbsp;<br />
                        <span className="text-muted small"> <strong>Due</strong></span>
                        <span className="text-muted small"> {assignment.due}  |  {assignment.points} pts</span>
                      </div>
                    </Link>
                  </div>

                  <div className="d-flex float-end">
                    <FaTrash
                      className="text-danger me-3 my-1"
                      data-bs-toggle="modal"
                      data-bs-target="#wd-delete-assignment-dialog"
                      onClick={() => {
                        setAssignmentToDelete(assignment);
                      }}
                    />
                    <GreenCheckmark />
                    <IoEllipsisVertical className="fs-4 ms-2 my-1" />
                  </div>

                  <div className="modal fade"
                    id="wd-delete-assignment-dialog"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5"
                            id="wd-delete-assignment-dialog-label">Assignment Deletion Alert</h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal">
                          </button>
                        </div>
                        <div className="modal-body">
                          Sure you want to remove this assignment?
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >No
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => {
                              dispatch(deleteAssignment(
                                assignmentToDelete._id));
                            }}
                          >Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )}
          </ul>

        </li>
      </ul>
    </div>
  );
}
