import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Institution {
     @PrimaryGeneratedColumn()
     id:number

     @Column()
     logo:string

     @Column({unique:true, nullable:false})
     name:string

     @Column({unique:true, nullable:false})
     email:string

     @Column({nullable:false})
     location:string

     @OneToMany(() => Employee, (employee) => employee.institution)
     employees: Promise<Array<Employee>>

}
