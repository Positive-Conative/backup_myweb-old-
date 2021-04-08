import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./Users";
import { Board_Contents } from "./Board_Contents";

@Entity("BoardLike")
export class Like{

    @PrimaryGeneratedColumn({ 
        comment: 'Like id'
    })
    id: number;
    
    
}