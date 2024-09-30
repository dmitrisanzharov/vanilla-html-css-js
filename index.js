import defaultExportFn from './defaultFn.js';
import defaultFn2 from './defaultFn2.js';
import anyNameFn3 from './defaultFn3NoName.js';
import myVar1 from './defaultPrimitives.js';
import defaultPrimNoName from './defaultPrimNoName.js';
import * as finalSht from './allOther.js';
import { foo as foo3 } from './allOther.js'



// code
// defaultExportFn();
// defaultFn2();
// anyNameFn3();
// nonDefault1();
// nonDefault2();


// primitives
console.log('myVar1', myVar1);
console.log('defaultPrimNoName', defaultPrimNoName);
console.log('finalSht', finalSht.default);
console.log('finalSht2', finalSht.nonDefault1());
console.log('this is foo: ', foo3);