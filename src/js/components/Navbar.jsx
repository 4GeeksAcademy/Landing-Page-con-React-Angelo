import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-lg-5">
        <a className="navbar-brand d-flex align-items-center" href="#!">
          <img
            src="https://cdn-icons-png.flaticon.com/512/33/33736.png"
            alt="Balón de fútbol"
            style={{ width: '30px', height: 'auto', marginRight: '10px' }}
          />
          <span className="fw-bold">TacticsFC</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#!">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};