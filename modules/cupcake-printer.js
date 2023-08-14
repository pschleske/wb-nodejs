const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const prettyPrintCupcake = (cupcake) => {
    return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each`;
};

const simplePrintCupcake = (cupcake) => {
    return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}`;
};

const myFunction = () => console.log("Hello, there")

export default prettyPrintCupcake;
export { prettyPrintCupcake, simplePrintCupcake, myFunction };

// you can export things the way shown in line above, or via name exports
// declaring export in front of function declaration (export const simplePrintCupcake etc)

// const fruits = ["apple", "banana", "cherry"];
// export default fruits;

