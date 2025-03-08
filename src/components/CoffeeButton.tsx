'use client'

function CoffeeButton() {
  return (
    //@ts-expect-error stripe buy button
    <stripe-buy-button
      buy-button-id="buy_btn_1QW1SIH150KModdNjKN01Afj"
      publishable-key="pk_live_51K070FH150KModdNM97WeCX0AUxPSqFoZjpmlbgmm0KyD0SarJmPEqxo8gRK8qx6MYfRvCywpKpe9KP9G8RpzuXn00JRCSy9UM"
      // @ts-expect-error stripe buy button
    ></stripe-buy-button>
  );
}
export default CoffeeButton;
