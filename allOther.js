export const nonDefault1 = () => {
    console.log('nonDefault1');
}

const nonDefault2 = () => {
    console.log('nonDefault2');
}

export const foo = 'foo var omg';
const foo2 = 'foo 2 var omg omg';




export { nonDefault2, foo2 }


export default 'this is default string from allOther';