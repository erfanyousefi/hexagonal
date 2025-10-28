import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "employee"})
export default class EmployeeDbEntity {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    position: string
}