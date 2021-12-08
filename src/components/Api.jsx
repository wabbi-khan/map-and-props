import React from "react";
import data from "../api.json";
const Api = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 d-flex">
						{data.miPhones.map((item, index) => {
							return (
								<div
									key={index}
									className="card"
									style={{
										width: "18rem",
										textAlign: "center",
									}}
								>
									<img src={item.image} className="card-img-top " alt="..." />
									<div className="card-body">
										<h6 className="card-title">Model: {item.name}</h6>
										<p className="card-text">Price: {item.price}.</p>
										<button className="btn btn-primary">Go somewhere</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-12 d-flex">
						{data.laptop.map((item, index) => {
							return (
								<div
									key={index}
									className="card"
									style={{
										width: "18rem",
										textAlign: "center",
									}}
								>
									<img src={item.image} className="card-img-top " alt="..." />
									<div className="card-body">
										<h5 className="card-title">Model: {item.name}</h5>
										<p className="card-text">Price: {item.price}.</p>
										<button className="btn btn-primary">Go somewhere</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Api;
