import { Component } from "react";

export class StripeCheckout extends Component {
  static displayName = StripeCheckout.name;

  render() {
    return (
      <div>
        <form action="http://localhost:5000/api/stripe" method="POST">
          <button type = "submit" >Checkout</button>
        </form>
      </div>
    );
  }
}
export default StripeCheckout