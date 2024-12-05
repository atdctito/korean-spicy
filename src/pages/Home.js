import React from 'react';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4">Korean Spicy Roll</h1>
      <p className="lead">makanan korean terbaik</p>
      
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/300" 
              className="card-img-top" 
              alt="Menu 1" 
            />
            <div className="card-body">
              <h5 className="card-title">keju Spicy Roll</h5>
              <p className="card-text">Roll keju pedas spesial</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/300" 
              className="card-img-top" 
              alt="Menu 2" 
            />
            <div className="card-body">
              <h5 className="card-title">nori Spicy Roll</h5>
              <p className="card-text">Roll nori pedas spesial</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/300" 
              className="card-img-top" 
              alt="Menu 3" 
            />
            <div className="card-body">
              <h5 className="card-title">crab stick Spicy Roll</h5>
              <p className="card-text">Roll crab stick pedas spesial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;