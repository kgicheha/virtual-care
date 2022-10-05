// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Button,
//   CssBaseline,
//   Stack,
//   Toolbar,
//   Container,
// } from "@mui/material";
// import { styled } from "@mui/material";
// import { red } from "@mui/material/colors";



// const handleSubmit = () => {
//   fetch('http://localhost:3000/create-checkout-session'), {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       items: [
//         {id: 1, quanitity: 1}
//       ]
//     })
//   }.then(res => {
//     if(res.ok) return res.json()
//     return res.json().then(json => Promise.reject(json))
//   }).then(({ url }) => {
//     window.location = url
//   }).catch(e => {
//     console.error(e.error)
//   })
// }

// const ProductDisplay = () => (
//   <section className="paymentsSection">
//     <div className="product">
//       <img className="imageSection" src={require("../Assets/logoonly.png")} alt="Logo" height="100" />
//     </div>
//     <div className="description">
//       <Stack spacing={1}>
//         <Typography variant="h6">Appointment</Typography>
//         <Typography variant="h6">Total: $50</Typography>
//       </Stack>
//     </div>
//     <form onSubmit={handleSubmit} action="/create-checkout-session" method="POST">
//       <CustomButton type="submit">Checkout</CustomButton>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// const Payments = () => {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);


//   // CUSTOM CSS
// const CustomButton = styled(Button)({
//   fontWeight: "bold",
//   backgroundColor: "#f35757",
//   color: "#ffffff",
//   "&:hover": {
//     backgroundColor: red[700],
//   },
// });
// // CUSTOM CSS ^^

//   const handleSubmit = () => {
//     fetch('http://localhost:3001/create-checkout-session', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         items: [
//           {id: 1, quanitity: 1}
//         ]
//       })
//     }).then(res => {
//       if(res.ok) return res.json()
//       return res.json().then(json => Promise.reject(json))
//     }).then(({ url }) => {
//       console.log(url)
//       // window.location = url
//     }).catch(e => {
//       console.error(e.error)
//     })
//   }


//   return (
//     <>
//       <section className="paymentsSection">
//     <div className="product">
//       <img className="imageSection" src={require("../Assets/logoonly.png")} alt="Logo" height="100" />
//     </div>
//     <div className="description">
//       <Stack spacing={1}>
//         <Typography variant="h6">Appointment</Typography>
//         <Typography variant="h6">Total: $50</Typography>
//       </Stack>
//     </div>
//     <form onSubmit={handleSubmit} action="/create-checkout-session" method="POST">
//       <CustomButton type="submit">Checkout</CustomButton>
//     </form>
//   </section>
//     </>
//   );
// }

// export default Payments;
