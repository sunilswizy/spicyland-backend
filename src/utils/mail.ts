import nodemailer from 'nodemailer';
import { IMail } from '../interfaces/mail';

function sendMail(payload: IMail) {
    return new Promise((resolve, reject) => {
        try {
            const fromEmail = process.env.EMAIL;
            const id = payload.id
            const email = payload.email;
            const brand = payload.brand;
            const price = payload.price;
            const guests = payload.guests;
            const reservedTime = payload.reservedTime;
    
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: fromEmail,
                    pass: process.env.PASSWORD,
                },
            });
    
            const mailOptions = {
                from: fromEmail,
                to: email,
                subject: "Dining Reserved Successfully!",
                html: `<h1 style="color: #ee536d;">DINNING RESERVED SUCCESSFULLY!</h1> <div><h4 style="color: #ee536d;"><b> Time</b></h4><p>${reservedTime}</p></div><div>	<h4 style="color: #ee536d;"><b> Party</b></h4>	<p>${guests} Guests</p></div><div>	<h4 style="color: #ee536d;"><b> Price</b></h4>	<p>$ ${price}</p></div><div>	<h4 style="color: #ee536d;"><b> Menu</b></h4>	<p> Juices, Biriyani, Pizza</p></div> <div><h4 style="color: #ee536d;"><b> Address</b></h4> <p>22/23, Kovaiputhur Road, Coimbatore , Coimbatore - 600017</p></div> <div>	<h4 style="color: #ee536d;"><b> Cancellation Policy</b></h4>	<p>While you won't be charged if you need to cancel, we ask that you do so at least 24 hours in advance.</p></div><div>	<h1 style="color: #ee536d;"><b> SpicylanD!</b></h1>	<p>spicyland, a land of spicy items!</p></div>`,
            };
    
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    reject(false);
                } else {
                    console.log("Email sent: " + info.response);
                    resolve(true);
                }
            });
        }
        catch(e) {
            console.error('Error sending mail ', e);
            reject(false);
        }
    })
};


export default sendMail;




// app.post("/send-mail", (req, res) => {
// 	const fromEmail = process.env.EMAIL;

// 	const id = req.body.token.id;
// 	const email = req.body.token.email;
// 	const brand = req.body.token.card.brand;
// 	const price = req.body.price;
// 	const guests = req.body.guests;
// 	const reservedTime = req.body.reservedTime;
// 	console.log("fads");

// 	console.log(id, email, brand, price, guests, reservedTime);

// 	const transporter = nodemailer.createTransport({
// 		service: "gmail",
// 		auth: {
// 			user: fromEmail,
// 			pass: process.env.PASSWORD,
// 		},
// 	});

// 	const mailOptions = {
// 		from: fromEmail,
// 		to: email,
// 		subject: "Dining Reserved Successfully!",
// 		html: `<h1 style="color: #ee536d;">DINNING RESERVED SUCCESSFULLY!</h1> <div><h4 style="color: #ee536d;"><b> Time</b></h4><p>${reservedTime}</p></div><div>	<h4 style="color: #ee536d;"><b> Party</b></h4>	<p>${guests} Guests</p></div><div>	<h4 style="color: #ee536d;"><b> Price</b></h4>	<p>$ ${price}</p></div><div>	<h4 style="color: #ee536d;"><b> Menu</b></h4>	<p> Juices, Biriyani, Pizza</p></div> <div><h4 style="color: #ee536d;"><b> Address</b></h4> <p>22/23, Kovaiputhur Road, Coimbatore , Coimbatore - 600017</p></div> <div>	<h4 style="color: #ee536d;"><b> Cancellation Policy</b></h4>	<p>While you won't be charged if you need to cancel, we ask that you do so at least 24 hours in advance.</p></div><div>	<h1 style="color: #ee536d;"><b> SpicylanD!</b></h1>	<p>spicyland, a land of spicy items!</p></div>`,
// 	};

// 	transporter.sendMail(mailOptions, function (error, info) {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			console.log("Email sent: " + info.response);
// 		}
// 	});
// });