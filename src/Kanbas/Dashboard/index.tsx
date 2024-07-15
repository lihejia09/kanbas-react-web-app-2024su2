export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1001/Home">
                <img src="/images/1001.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1001 Discrete Math
                  </h5>
                  <p className="card-text">
                    202109_Fall.38533
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1002/Home">
                <img src="/images/1002.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1002 MATLAB
                  </h5>
                  <p className="card-text">
                    202301_Spring.38544
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1003/Home">
                <img src="/images/1003.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1003 Python
                  </h5>
                  <p className="card-text">
                    202309_Fall.38555
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1004/Home">
                <img src="/images/1004.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1004 Data Science
                  </h5>
                  <p className="card-text">
                    202401_Spring.38566
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1005/Home">
                <img src="/images/1005.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1005 Web
                  </h5>
                  <p className="card-text">
                    202409_Fall.38577
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1006/Home">
                <img src="/images/1006.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1006 Cybersecurity
                  </h5>
                  <p className="card-text">
                    202309_Fall.38588
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1007/Home">
                <img src="/images/1007.jpg" style={{ width: "100%", height: "150px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1007 Java
                  </h5>
                  <p className="card-text">
                    202401_Spring.38599
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}