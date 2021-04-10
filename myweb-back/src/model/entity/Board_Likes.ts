import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./Users";
import { Board_Contents } from "./Board_Contents";

@Entity("Board_Likes")
export class Board_Likes{

    @PrimaryGeneratedColumn({ 
        comment: 'Like id'
    })
    id: number;
    
    @CreateDateColumn({
        comment: '생성일'
    })
    create_time: Date;

    @UpdateDateColumn({
        comment: '수정일'
    })
    update_time: Date;

    //FK AREA
    @ManyToOne(
        (type)=>Users,
        (users)=>users.board_likes,
        {nullable: false}
    )
    user: Users

    @ManyToOne(
        (type)=>Board_Contents,
        (board_contents)=>board_contents.board_likes,
        {nullable: false}
    )
    board_contents: Board_Contents
}