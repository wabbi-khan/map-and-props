import React from "react";
import product from "../data";
const Carts = () => {
	console.log(product);
	return (
		<>
			{product.data.map((item) => (
				<div className="container" key={item.id}>
					<div className="row">
						<div
							style={{
								textAlign: "center",
							}}
						>
							<div
								class="card"
								style={{
									width: "18rem",

									textAlign: "center",
								}}
							>
								<img src={item.img} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">{item.cate}</h5>
									<p class="card-text">{item.title}.</p>
									<button class="btn btn-primary">Go somewhere</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			{product.data1.map((item) => (
				<div className="container" key={item.id}>
					<div className="row">
						<div
							className="col-12"
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
							}}
						>
							<div
								class="card"
								style={{
									width: "18rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									textAlign: "center",
								}}
							>
								<img src={item.img} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">{item.cate}</h5>
									<p class="card-text">{item.title}.</p>
									<button class="btn btn-primary"> Go somewhere</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Carts;
