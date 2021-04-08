import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("Board")
export class Board {
       
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    isActive: boolean;

}