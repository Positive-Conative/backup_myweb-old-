import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./Users";
import { Board_Contents } from "./Board_Contents";

@Entity("BoardComents")
export class Board_Coments{

    @PrimaryGeneratedColumn({ 
        comment: 'Comment ID'
    })
    id: number;

    @Column({
        length: 100,
        comment: '내용'
    })
    content: string;

    @Column({
        length: 100,
        comment: '좋아연'
    })
    like: string;

    @CreateDateColumn({
        comment: '생성일'
    })
    create_time: Date;

    @UpdateDateColumn({
        comment: '수정일'
    })
    update_time: Date;


    //  FK AREA
    @ManyToOne(
        (type)=>Users,
        (users)=>users.board_coments,
        {nullable: false}
    )
    user: Users

    @ManyToOne(
        (type)=>Board_Contents,
        (board_contents)=>board_contents.board_coments,
        {nullable: false}
    )
    board_contents: Board_Contents
}
//몇번보드, 어떤놈인지 알야야되니까..