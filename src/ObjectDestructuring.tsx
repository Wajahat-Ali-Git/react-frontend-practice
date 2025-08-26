/*interface variables {
  carItems: {
    name?: string;
    type?: string;
    price: number;
    a?: string;
    b?: string;
    c: number;
  };
}
function ObjectDestructuring({ carItems }: variables) {
  carItems = {
    price: 2000000,
    name: "honda",
    type: "suv",
  };

  {
    const { carItems, b, c } = { carItems.name, carItems.type, carItems.price };
    const n= carItems.name
  }

  return (
    <>
      <p>i have a car named {carItems.name} </p>
    </>
  );
}
export default ObjectDestructuring;
*/
