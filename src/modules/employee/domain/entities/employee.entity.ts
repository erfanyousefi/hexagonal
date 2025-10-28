export default class Employee {
    constructor(
        public id: number | null,
        public name: string,
        public email: string,
        public position: string,
    ) { }
}