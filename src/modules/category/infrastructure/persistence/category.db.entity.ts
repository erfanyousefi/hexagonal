import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "category"})
export class CategoryDbEntity {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column()
    title: string
    @Column({unique: true})
    slug: string
    @Column({nullable: true})
    parentId: number
    @ManyToOne(() => CategoryDbEntity, cat => cat.children, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    parent: CategoryDbEntity
    @OneToMany(() => CategoryDbEntity, cat => cat.parent)
    children: CategoryDbEntity[]
}