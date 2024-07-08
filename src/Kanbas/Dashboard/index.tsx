export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 0 */}
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <img src="/images/1001.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1001/Home">
              CS1001 Discrete Math
            </a>
            <p className="wd-dashboard-course-title">
              CS1001 Summer 2023 Semester.38532
            </p>
            <a href="#/Kanbas/Courses/1001/Home"> Go </a>
          </div>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <img src="/images/1002.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1002/Home">
              CS1002 MATLAB
            </a>
            <p className="wd-dashboard-course-title">
              CS1002 Spring 2023 Semester.38544
            </p>
            <a href="#/Kanbas/Courses/1002/Home"> Go </a>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <img src="/images/1003.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1003/Home">
              CS1003 Python
            </a>
            <p className="wd-dashboard-course-title">
              CS1003 Fall 2023 Semester.38555
            </p>
            <a href="#/Kanbas/Courses/1003/Home"> Go </a>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <img src="/images/1004.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1004/Home">
              CS1004 Data Science
            </a>
            <p className="wd-dashboard-course-title">
              CS1004 Spring 2023 Semester.38566
            </p>
            <a href="#/Kanbas/Courses/1004/Home"> Go </a>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <img src="/images/1005.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1005/Home">
              CS1005 Web Development
            </a>
            <p className="wd-dashboard-course-title">
              CS1005 Fall 2023 Semester.38577
            </p>
            <a href="#/Kanbas/Courses/1005/Home"> Go </a>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <img src="/images/1006.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1006/Home">
              CS1006 Cybersecurity  
            </a>
            <p className="wd-dashboard-course-title">
              CS1006 Spring 2023 Semester.38588
            </p>
            <a href="#/Kanbas/Courses/1006/Home"> Go </a>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <img src="/images/1007.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1007/Home">
              CS1007 Java
            </a>
            <p className="wd-dashboard-course-title">
              CS1007 Fall 2023 Semester.38599
            </p>
            <a href="#/Kanbas/Courses/1007/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
);}