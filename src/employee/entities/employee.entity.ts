import { Credential } from "src/credential/entities/credential.entity";
import { Institution } from "src/institution/entities/institution.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

     @ManyToMany(() => Credential, credential => credential.signees)
     credetialsSigned: Array<Credential>
}
