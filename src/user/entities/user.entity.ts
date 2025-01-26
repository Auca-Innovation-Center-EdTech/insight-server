import { ERole } from "src/util/enums/enums"
import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm"

@Entity()
export class User {
     @PrimaryGeneratedColumn("uuid")
     id:string

     @Column({unique:true, nullable: false})
     email:string

     @Column({nullable: false})
     password: string

     @Column()
     active: boolean

     @Column()
     role:ERole

     @Column()
     permissions:string

     @Column({type:'timestamp'})
     createdAt:Date
}
