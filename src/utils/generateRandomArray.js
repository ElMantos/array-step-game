export default (length, max) => [...Array(length)].map(() => Math.floor(Math.random() * (max + 1)));
