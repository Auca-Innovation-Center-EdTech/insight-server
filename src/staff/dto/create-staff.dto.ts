export class CreateStaffDto {
     name:string
     email:string
     password:string
     role:string
     permissions: Array<string>
}