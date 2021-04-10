import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn } from "typeorm";
import { Board_Contents } from "./Board_Contents";

@Entity("Board_Groups")
export class Board_Groups{

    @PrimaryGeneratedColumn({ 
        comment: 'Group ID'
    })
    id: number;
    
    @Column({
        length:15,
        comment: '그룹명'
    })
    name: string;

    @Column({
        length:30,
        nullable: true,
        comment: '설명'
    })
    description: string;

    @Column({
        comment: '권한'
    })
    authority: number;

    @UpdateDateColumn({
        comment: '생성일'
    })
    create_time: Date;

    @UpdateDateColumn({
        comment: '수정일'
    })
    update_time: Date;

    
    //  FK AREA
    @Column({
        type:"tinyint",
        default: 0,
        comment: '상태 (0:정상 / 1:삭제)'
    })
    flag?: number;

    @OneToMany(
        (type)=>Board_Contents,
        (board_contents)=>board_contents.board_groups
    )
    board_contents:Board_Contents[];
}