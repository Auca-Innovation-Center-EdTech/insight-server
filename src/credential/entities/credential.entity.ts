import { Employee } from "src/employee/entities/employee.entity";
import { Institution } from "src/institution/entities/institution.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn} from "typeorm";

@Entity()
export class Credential {
     @PrimaryColumn()
     credentialId:string

     @Column()
     issueDate: Date

     @ManyToMany(() => Employee, employee => employee.credetialsSigned)
     @JoinTable()
     signees: Array<Employee>

     @ManyToOne(() => Institution, institution => institution.credentials)
     institution: Institution

}
