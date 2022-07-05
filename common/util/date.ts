// months
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export function numberCompareTo(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a - b;
	}
	return 0;
}

// Format date in Month Year format
export function formatDate(date: Date): string {
	return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
