const years = [1980, 1934, 2002, 2019];
const currentYear = new Date().getFullYear()
const yearsPassed = years.map(el => currentYear - el);
console.log(yearsPassed)