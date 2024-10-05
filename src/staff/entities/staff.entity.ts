
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Staff {
     @PrimaryGeneratedColumn()
     id: number

     @Column({nullable: false})
     name:string

     @Column({unique: true, nullable:false})
     email: string

     @Column({nullable:false})
     role: string

     @Column({nullable:false, type:'json'})
     permissions: Array<string>
}
