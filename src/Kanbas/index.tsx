
import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Dashboard from './Dashboard';
import './styles.css';
import * as client from "./client";
import store from "./store";
import { Provider } from "react-redux";
import Account from './Account';
import ProtectedRoute from './ProtectedRoute';
import Session from './Account/Session';


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);

  const fetchAllCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);


  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas">
          <div className="d-flex h-100">
            <div className="d-none d-md-block bg-black">
              <KanbasNavigation />
            </div>
            <div className="wd-main-content-offset p-3">
              <Routes>
                <Route path="Account/*" element={<Account />} />
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route
                  path="Dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="Courses/:courseID/*"
                  element={
                    <ProtectedRoute>
                      <Courses courses={courses} />
                    </ProtectedRoute>}
                />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>
        </div>

      </Session>
    </Provider>
  );
}

