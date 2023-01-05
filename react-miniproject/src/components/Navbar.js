import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark  bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="data:image/png;base64,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"
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
                <a className="nav-link" href="#">
                  Book Free Trial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
