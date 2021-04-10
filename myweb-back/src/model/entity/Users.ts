import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Board_Likes } from "./Board_Likes";
import { Board_Contents } from "./Board_Contents";
import { Board_Coments } from "./Board_Coments";
import { Question_Boards } from "./Question_Boards";

@Entity("Users")
export class Users{
    @Column({
        primary : true,
        length: 35,
        comment:"이메일"
    })
    email: string;

    @Column({
        length: 15,
        comment:"이메일"
    })
    password: string;

    @Column({
        length: 25,
        comment:"이메일"
    })
    name: string;

    @Column({
        length: 25,
        comment:"이메일"
    })
    nickname: string;

    @Column({
        length: 50,
        nullable: true,
        comment:"이메일"
    })
    address?: string;

    @Column({
        type:"tinyint",
        comment: '성별 (남:1/여:0)'
    })
    gender: boolean;

    @Column({
        nullable: true,
        comment: '나이'
    })
    age?: number;

    @CreateDateColumn()
    create_time: Date;

    @UpdateDateColumn()
    update_time: Date;

    //FK AREA
    @OneToMany(
        (type)=>Board_Contents,
        (board_contents)=>board_contents.user
    )
    board_contents:Board_Contents[];

    @OneToMany(
        (type)=>Board_Coments,
        (board_coments)=>board_coments.user
    )
    board_coments:Board_Coments[];

    @OneToMany(
        (type)=>Question_Boards,
        (question_boards)=>question_boards.user
    )
    question_boards:Question_Boards[];

    @OneToMany(
        (type)=>Board_Likes,
        (board_likes)=>board_likes.user
    )
    board_likes:Board_Likes[];

    // static findByName(id: number, pw: string) {
    //     return this.createQueryBuilder("User")
    //         .where("User.id = :id", { id })
    //         .andWhere("User.pw = :pw", { pw })
    //         .getMany();
    // }
}
