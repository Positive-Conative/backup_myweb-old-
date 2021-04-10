import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Users } from "./Users";
import { Board_Groups } from "./Board_Groups";
import { Board_Coments } from "./Board_Coments";
import { Board_Likes } from "./Board_Likes";

@Entity("Board_Contents")
export class Board_Contents{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        length: 30,
        comment: '제목'
    })
    title: string;

    @Column({
        length: 300,
        comment: '내용'
    })
    content: string;

    @Column({
        length: 128,
        nullable: true,
        comment: '파일'
    })
    file_src: string;

    @Column({
        length: 128,
        nullable: true,
        comment: '이미지'
    })
    image_src: string;

    @Column({
        default: 0,
        comment: '조회수'
    })
    hit: number;

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
        (users)=>users.board_contents,
        {nullable: false}
    )
    user: Users
    @ManyToOne(
        (type)=>Board_Groups,
        (board_groups)=>board_groups.board_contents,
        {nullable: false}
    )
    board_groups: Board_Groups

    @OneToMany(
        (type)=>Board_Coments,
        (board_coments)=>board_coments.board_contents
    )
    board_coments:Board_Coments[];

    @OneToMany(
        (type)=>Board_Likes,
        (board_likes)=>board_likes.board_contents
    )
    board_likes:Board_Likes[];


}