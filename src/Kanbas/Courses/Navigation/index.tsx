import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
  const { courseID } = useParams();
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseID}/${link}`}
          className={`list-group-item text-danger border border-0 
            ${pathname.includes(link) ? "active bg-white text-black" : "text-danger"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}