import { Institution } from './../../institution/entities/institution.entity';
export class CreateEmployeeDto {
     name: string
     email: string
     password: string
     role: string
     signature: string
     institution: Institution
}
