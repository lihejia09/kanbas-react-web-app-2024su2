import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentHeader() {
    return (
        <div className="float-end">
            <button className="oval-button">40% of Total</button>
            <BsPlus className="fs-1" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}