import { Institution } from "src/institution/entities/institution.entity"

export class CreateCredentialDto {
     credentialId:string
     document: string
     issueDate: Date
     institution: Institution
}
