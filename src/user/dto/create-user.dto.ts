import { ERole } from "src/util/enums/enums"

export class CreateUserDto {
     email:string
     password: string
     active: boolean
     role:ERole
     permissions:string
     createdAt:Date
}
