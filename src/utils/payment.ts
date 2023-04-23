import stripe from 'stripe';

const makePayment = (payload: any) => {
    return new Promise(async (resolve, reject) => {

		try {
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ["card"],
				shipping_address_collection: {
					allowed_countries: ["IN"],
				},
				shipping_options: [
					{
						shipping_rate_data: {
							type: "fixed_amount",
							fixed_amount: {
								amount: 2800,
								currency: "inr",
							},
							display_name: "fast shipping",
							delivery_estimate: {
								minimum: {
									unit: "hour",
									value: 1,
								},
								maximum: {
									unit: "hour",
									value: 2,
								},
							},
						},
					},
				],
				line_items: payload,
				phone_number_collection: {
					enabled: true,
				},
				mode: "payment",
				allow_promotion_codes: true,
				success_url: `https://spicyland.herokuapp.com/success`,
				cancel_url: `https://spicyland.herokuapp.com/checkout`,
			});
	
			resolve({
				url: session.url
			})
		}
		catch(e) {
			console.error(e);
			reject(false);
		}  
    })
}

export default makePayment;



// import path from "path";

// if (process.env.NODE_ENV !== "production") require("dotenv").config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "client/build")));

// 	app.get("*", function (req, res) {
// 		res.sendFile(path.join(__dirname, "client/build", "index.html"));
// 	});
// }



// app.post("/create-checkout-session", async (req, res) => {
// 	try {
// 		console.log("Hitted..")
// 		const session = await stripe.checkout.sessions.create({
// 			payment_method_types: ["card"],
// 			shipping_address_collection: {
// 				allowed_countries: ["IN"],
// 			},
// 			shipping_options: [
// 				{
// 					shipping_rate_data: {
// 						type: "fixed_amount",
// 						fixed_amount: {
// 							amount: 2800,
// 							currency: "inr",
// 						},
// 						display_name: "fast shipping",
// 						delivery_estimate: {
// 							minimum: {
// 								unit: "hour",
// 								value: 1,
// 							},
// 							maximum: {
// 								unit: "hour",
// 								value: 2,
// 							},
// 						},
// 					},
// 				},
// 			],
// 			line_items: req.body.items,
// 			phone_number_collection: {
// 				enabled: true,
// 			},
// 			mode: "payment",
// 			allow_promotion_codes: true,
// 			success_url: `https://spicyland.herokuapp.com/success`,
// 			cancel_url: `https://spicyland.herokuapp.com/checkout`,
// 		});
// 		res.json({ url: session.url });
// 		console.log(session.url);
// 	} catch (e: any) {
// 		res.status(500).json({ error: e.message });
// 	}
// });
