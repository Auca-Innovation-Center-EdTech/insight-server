import { Employee } from "src/employee/entities/employee.entity"
import { Institution } from "src/institution/entities/institution.entity"

export class CreateCredentialDto {
     credentialId:string
     issueDate: Date
     institution: Institution
     signees: Array<Employee>
}
