import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  editAssignment,
} from "./reducer";


export default function AssignmentEditor() {
  const { assignmentId, courseID } = useParams();
  // const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: any) => state.assignmentsReducer.assignment
  );

  return (
    <div id="wd-assignments-editor">
      <div className="form-row mt-3 mx-3">
        <label htmlFor="wd-assignment-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="wd-assignment-name"
          value={assignment?.title}
          onChange={(e) =>
            dispatch(
              editAssignment({ ...assignment, title: e.target.value })
            )}
        />
      </div>

      <div className="mb-3 mx-3">
        <textarea
          className="form-control"
          id="wd-assignment-description"
          rows={10}
          value={assignment?.description}
          onChange={(e) =>
            dispatch(
              editAssignment({ ...assignment, description: e.target.value })
            )}
        >
        </textarea>
      </div>

      <div className="container">
        <div className="row my-3">
          <div className="col-4 text-end">Points</div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="wd-assignment-points"
              defaultValue={assignment?.points}
              onChange={(e) =>
                dispatch(
                  editAssignment({ ...assignment, points: e.target.value })
                )}
            />
          </div>
        </div>

        <div className="row my-3">
          <div className="col-4 text-end">Assignment Group</div>
          <div className="col-8">
            <select className="form-select" id="wd-assignment-group">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="quizzes">Quizzes</option>
              <option value="exams">Exams</option>
            </select>
          </div></div>

        <div className="row my-3">
          <div className="col-4 text-end">Display Grade as</div>
          <div className="col-8">
            <select className="form-select" id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="letter">Letter Grade</option>
            </select>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-4 text-end">Submission Type</div>
          <div className="col-8">
            <div className="border rounded px-3">
              <select className="form-select my-3" id="wd-submission-type">
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <b>Online Entry Options</b>
              <div className="form-check my-3">
                <input className="form-check-input" type="checkbox" id="wd-assignment-text-entry" />
                <label className="form-check-label" htmlFor="wd-assignment-text-entry">
                  Text Entry
                </label>
              </div>
              <div className="form-check my-3">
                <input className="form-check-input" type="checkbox" id="wd-assignment-website-url" defaultChecked />
                <label className="form-check-label" htmlFor="wd-assignment-website-url">
                  Website URL
                </label>
              </div>
              <div className="form-check my-3">
                <input className="form-check-input" type="checkbox" id="wd-assignment-media-recording" />
                <label className="form-check-label" htmlFor="wd-assignment-media-recording">
                  Media Recording
                </label>
              </div>
              <div className="form-check my-3">
                <input className="form-check-input" type="checkbox" id="wd-assignment-student-annotation" />
                <label className="form-check-label" htmlFor="wd-assignment-student-annotation">
                  Student Annotation
                </label>
              </div>
              <div className="form-check my-3">
                <input className="form-check-input" type="checkbox" id="wd-assignment-file-upload" />
                <label className="form-check-label" htmlFor="wd-assignment-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-4 text-end">Assign</div>
          <div className="col-8">
            <div className="border rounded px-3">
              <label className="form-check-label mb-1 mt-3" htmlFor="wd-assignment-assign-to">
                <b>Assign to</b>
              </label>
              <input type="text" className="form-control mb-2" id="wd-assignment-assign-to" value="Everyone" />
              <label className="form-check-label mb-1 mt-3" htmlFor="wd-assignment-due-date">
                <b>Due</b>
              </label>
              <input
                type="date"
                className="form-control mb-2"
                id="wd-assignment-due-date"
                value={assignment?.due}
                onChange={(e) =>
                  dispatch(
                    editAssignment({ ...assignment, due: e.target.value })
                  )}
              />
              <div className="row mt-3">
                <div className="col">
                  <label className="form-check-label mb-1" htmlFor="wd-assignment-available-from">
                    <b>Available from</b></label>
                  <input
                    type="date"
                    className="form-control mb-2"
                    id="wd-assignment-available-from"
                    value={assignment?.available}
                    onChange={(e) =>
                      dispatch(
                        editAssignment({ ...assignment, available: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="col mb-5">
                  <label className="form-check-label mb-1" htmlFor="wd-assignment-available-until">
                    <b>Until</b></label>
                  <input
                    type="date"
                    className="form-control"
                    id="wd-assignment-available-until"
                    value={assignment?.until}
                    onChange={(e) =>
                      dispatch(
                        editAssignment({ ...assignment, until: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="custom-hr" />
      <div className="row">
        <div className="d-flex justify-content-end">
          <Link
            className="wd-assignment-button-return"
            to={`/Kanbas/Courses/${courseID}/Assignments`}>
            <button
              type="button"
              className="btn btn-secondary mx-1 my-3 float-end"
              id="wd-assignment-cancel"
            >
              Cancel
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger mx-1 my-3 mr-3 float-end"
            id="wd-assignment-save"
            onClick={() => {
              if (assignments.find((assignment: any) => assignment._id === assignmentId)) {
                dispatch(updateAssignment(assignment));
              } else {
                dispatch(addAssignment(assignment));
              }
              navigate(`/Kanbas/Courses/${courseID}/Assignments`);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
