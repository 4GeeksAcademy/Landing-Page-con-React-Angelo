import React from "react";

export const Jumbotron = () => {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-start">
          <div className="m-4 m-lg-5">
            <h1 className="display-5 fw-bold">"Domina el Campo de Juego"</h1>
            <p className="fs-4">Recursos, tácticas y entrenamiento especializado para futbolistas que buscan elevar su nivel al siguiente escalón.</p>
           <a className="btn btn-primary p-2 btn btn-primary d-flex align-items-center justify-content-center" href="#!">
              <img
                src="https://cdn-icons-png.flaticon.com/512/33/33736.png"
                alt="Balón de fútbol"
                style={{ width: '40px', height: 'auto', }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};