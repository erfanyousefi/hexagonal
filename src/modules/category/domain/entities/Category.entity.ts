export class Category {
    constructor(
        public id: number | null,
        public title: string,
        public slug: string,
        public parentId: number | null
    ) { }
}