import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
export default function AssignmentHead() {
  return (
    <div className="d-flex">
      <BsGripVertical className="fs-3 me-3" />
      <GiNotebook className="me-2 fs-3" style={{ color: 'green' }} />
    </div>
  );
}
