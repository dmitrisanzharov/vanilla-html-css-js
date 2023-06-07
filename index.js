export const carsJSON = [
	{
		id: "646f18c67a2f3482720d70cf",
		name: "red-car-1",
		color: "lightcoral",
		rentedOut: "not-available",
		miles: 50000,
	},
	{
		id: "646f18c67a2f3482720d70d0",
		name: "red-car-2",
		color: "lightcoral",
		rentedOut: "available",
		miles: 75000,
	},
	{
		id: "646f18c67a2f3482720d70d8",
		name: "red-car-3",
		color: "lightcoral",
		rentedOut: "not-available",
		miles: 275000,
	},
	{
		id: "646f18c67a2f3482720d70d1",
		name: "blue-car-1",
		color: "lightcyan",
		rentedOut: "not-available",
		miles: 100000,
	},
	{
		id: "646f18c67a2f3482720d70d2",
		name: "blue-car-2",
		color: "lightcyan",
		rentedOut: "available",
		miles: 125000,
	},
	{
		id: "646f18c67a2f3482720d70d3",
		name: "orange-car-1",
		color: "orange",
		rentedOut: "not-available",
		miles: 150000,
	},
	{
		id: "646f18c67a2f3482720d70d4",
		name: "pink-car-1",
		color: "pink",
		rentedOut: "not-available",
		miles: 175000,
	},
	{
		id: "646f18c67a2f3482720d70d5",
		name: "beige-car-1",
		color: "beige",
		rentedOut: "available",
		miles: 200000,
	},
	{
		id: "646f18c67a2f3482720d70d6",
		name: "yellow-car-1",
		color: "yellow",
		rentedOut: "not-available",
		miles: 225000,
	},
	{
		id: "646f18c67a2f3482720d70d7",
		name: "yellow-car-2",
		color: "yellow",
		rentedOut: "available",
		miles: 250000,
	},
];

// export const carsJSON = [
// 	{ color: "blue", name: "bmw" },
// 	// { color: "yellow" },
// 	// { color: "green" },
// 	{ color: "yellow", name: "audi" },
// ];

const filters1 = {
	color: ["yellow", "lightcoral"],
	rentedOut: ["not-available"],
};

function filterData(arr, filt) {
	const filterKeysArray = Object.keys(filt);
	// console.log("filterKeysArray: ", filterKeysArray);

	return arr.filter((item) => {
		return filterKeysArray.every((key) => {
			let itemValue = item[key];
			// console.log("itemValue: ", itemValue);
			let filterValue = filt[key]; // so here I need to insert INFINITE OR statements
			// console.log("filterValue: ", filterValue);
			// console.log("==========");
			return filterValue.indexOf(itemValue) !== -1;
		});
	});

	// remove duplicates

	// let final2 = Array.from(new Set(final1));
	// console.log("final2: ", final2);
}

let a = filterData(carsJSON, filters1);
console.log(a);
