import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://champs-dashboard.s3.ap-south-1.amazonaws.com/web-assets/logo.png"
              alt="Logo"
              width={180}
              height={48}
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" target="_blank" rel="noopener noreferrer">
                  Book Free Trial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" target="_blank" rel="noopener noreferrer">
                  Purchase Course
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
