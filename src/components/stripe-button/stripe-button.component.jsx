import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 70
    const publishableKey = 'pk_test_KcUInl8zKiAwErkuKf5t4Rw900ghSHY2Uq'

    const onToken = token => {
        console.log(token)
        alert('Payment DONE !!')
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name= "E-Commerce"
            billingAddress
            shippingAddress
            image ='https://sendeyo.com/up/d/f3eb2117da'
            description ={`Total price is ₹${price}`}
            amount ={priceForStripe}
            panelLabel ="Pay now"
            token ={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton