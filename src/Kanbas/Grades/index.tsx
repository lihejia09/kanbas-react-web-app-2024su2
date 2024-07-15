import { FaMagnifyingGlass, FaChevronDown, FaFilter } from 'react-icons/fa6';
import { IoExitOutline } from "react-icons/io5";
import GradesControls from './GradesControls';

export default function Grades() {
    return (
        <div id="wd-grades">
            <GradesControls /><br /><br />

            <div className="row mt-1">
                <div className="col">
                    <label className="form-check-label mb-1" htmlFor="wd-grades-search-students">
                        <b>Student Names</b>
                    </label>
                    <div className="input-group mb-2">
                        <span className="input-icon">
                            <FaMagnifyingGlass className="input-icon-left"/>
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
                            <td>
                                A1 SETUP<br />
                                <small>Out of 100</small>
                            </td>
                            <td>
                                A2 HTML<br />
                                <small>Out of 100</small>
                            </td>
                            <td>
                                A3 CSS<br />
                                <small>Out of 100</small>
                            </td>
                            <td>
                                A4 BOOTSTRAP<br />
                                <small>Out of 100</small>
                            </td>

                        </tr>
                        <tr>
                            <td className="text-start text-danger">Jane Adams</td>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td className="text-start text-danger">Christina Allen</td>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td className="text-start text-danger">Samreen Ansari</td>
                            <td>100%</td>
                            
                            <div className="input-group flex-nowrap">
                                <input
                                    className="form-control text-center w-auto rounded"
                                    type="text"
                                    defaultValue="88.5%"

                                    size={3}
                                />
                                <button type="button" className="wd-grades-edit-btn btn">
                                    <IoExitOutline />
                                </button>
                            </div>

                            <td>92.18%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td className="text-start text-danger">Han Bao</td>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>100%</td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </div >


    )
}