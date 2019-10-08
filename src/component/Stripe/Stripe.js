import React from 'react';
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import Axios from 'axios';

toast.configure()




// async donateSubmit() {
//     await axios.post('/api/donate', {price})
// }


function Stripe() {

    const [product] = React.useState({
        name: "Donation",
        price: 5.00
    });



    async function handleToken(token, addresses) {
        // console.log({token, addresses})
        const response = await axios.post("/api/checkout", {
            token,
            product
        })
        Axios.post("/api/adddonation", {product}).then(
            (response) => {
                
            }
        )
        const { status } = response.data
        if (status === "success") {
            console.log('hit on Stripe')
            toast('Success! Check your email for details on your donation',
                { type: 'success' })

            // post sending listing_id and user_id to db

        } else {
            toast('Something went wrong, please check your payment information',
                { type: 'error' })
        }
    }


    return (
        <StripeCheckout
            stripeKey="pk_test_wQsodCNRJfeKJwDhtdZCLigB001og0WvgZ"
            token={handleToken}
            billingAddress
            amount={product.price * 100}
            name={product.name}

        />

    )
}


export default Stripe;