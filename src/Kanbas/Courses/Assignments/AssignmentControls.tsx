import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";


export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end" >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end" >
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
  );
}
