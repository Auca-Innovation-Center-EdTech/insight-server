import { Institution } from "src/institution/entities/institution.entity";
import { Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";

@Entity()
export class Credential {
     @PrimaryColumn()
     credentialId:string

     @Column()
     document: string

     @Column()
     issueDate: Date

     @ManyToOne(() => Institution, institution => institution.credentials)
     institution: Institution

}
