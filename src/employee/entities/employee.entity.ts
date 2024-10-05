import { Institution } from "src/institution/entities/institution.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
     @PrimaryGeneratedColumn()
     id: number

     @Column()
     name: string

     @Column()
     email:string

     @Column()
     role:string

     @Column()
     signature: string

     @ManyToOne(() => Institution, institution => institution.employees)
     institution: Institution
}
