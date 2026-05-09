import React from "react";

export const Jumbotron = () => {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
      
        <div className="p-4 p-lg-5 bg-light rounded-3 text-start border-start border-5 border-success shadow">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-3">"Domina el Campo de Juego"</h1>
              <p className="fs-4 mb-4">
                Recursos, tácticas y entrenamiento especializado para futbolistas que buscan elevar su nivel al siguiente escalón.
              </p>
            
              <a 
                className="btn btn-success btn-lg d-inline-flex align-items-center gap-2 px-4 shadow-sm"  
                target="_blank" 
                rel="noopener noreferrer"
                style={{ borderRadius: "10px" }}
              >
                <span className="fw-bold">EXPLORAR TÁCTICAS</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/33/33736.png"
                  alt="Balón de fútbol"
                  style={{ width: '30px', height: 'auto' }}
                />
              </a>
            </div>
          
            <div className="col-lg-4 d-none d-lg-block text-center">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1165/1165187.png" 
                alt="Estrategia" 
                className="img-fluid opacity-25"
                style={{ maxHeight: "180px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};