import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm" style={{ borderBottom: "3px solid #198754" }}>
      <div className="container px-lg-5">
        <a className="navbar-brand d-flex align-items-center py-3" href="#!">
          <img
            src="https://cdn-icons-png.flaticon.com/512/33/33736.png"
            alt="Balón de fútbol"
            style={{ width: '35px', height: 'auto', marginRight: '12px', filter: 'brightness(1.2)' }}
          />
          <span className="fw-bold fs-4 tracking-tight" style={{ letterSpacing: '1px' }}>
            TACTICS<span className="text-success">FC</span>
          </span>
        </a>

       
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active text-uppercase fw-semibold small" href="#!">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-uppercase fw-semibold small" href="#!">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-uppercase fw-semibold small" href="#!">Services</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-uppercase fw-semibold small" href="#!">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};