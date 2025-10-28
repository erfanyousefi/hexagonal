export class Article {
    constructor(
        public id: number | null,
        public title: string,
        public slug: string,
        public image: string,
        public content: string,
        public author: string,
        public createdAt: Date,
    ) { }
}