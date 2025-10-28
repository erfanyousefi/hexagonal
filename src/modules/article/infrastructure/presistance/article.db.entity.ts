import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "article"})
export class ArticleDbEntity {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column()
    title: string
    @Column()
    slug: string
    @Column()
    content: string
    @Column()
    image: string
    @Column()
    author: string
    @CreateDateColumn()
    createdAt: Date
}