import { FaFileImport, FaFileExport, FaGear, FaChevronDown } from 'react-icons/fa6';


export default function GradesControls() {
    return (
        <div id="wd-grades-controls" className="text-nowrap my-2">
            <button id="wd-grades-gear-btn" className="btn btn-secondary float-end" >
                <FaGear className="position-relative" style={{ bottom: "1px" }} />
            </button>
            <div className="dropdown">
                <button
                    type="button"
                    id="wd-grades-export-btn"
                    className="btn btn-secondary mx-1 float-end"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <FaFileExport className="position-relative me-2" style={{ bottom: "1px" }} />
                    Export
                    <FaChevronDown className="position-relative ms-1" style={{ bottom: "1px" }} />
                </button>
                <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href="#">Export All</a></li>
                    <li><a className="dropdown-item" href="#">Export Selected</a></li>
                </ul>
            </div>
            <button id="wd-grades-import-btn" className="btn btn-secondary me-1 float-end" >
                <FaFileImport className="position-relative me-2" style={{ bottom: "1px" }} />
                Import
            </button>
        </div>
    );
}
