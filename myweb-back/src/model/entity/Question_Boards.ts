import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne} from "typeorm";
import { Users } from "./Users";

@Entity("Question_Boards")
export class Question_Boards{
    @PrimaryGeneratedColumn({ 
        comment: 'Question Board id'
    })
    id: number;

    @Column({
        length:30,
        comment: '제목'
    })
    title: string;

    @Column({
        length:100,
        comment: '내용'
    })
    content: string;

    @Column({
        length:128,
        comment: '이미지'
    })
    img_src: string;

    @Column({
        length:150,
        comment: 'Admin 답장'
    })
    admin_content: string;

    @Column()
    admin_date: Date;

    @CreateDateColumn()
    create_time: Date;

    // @UpdateDateColumn()
    // update_time: Date;
    
    //fk area
    @ManyToOne(
        (type)=>Users,
        (users)=>users.question_boards,
        {nullable:false}
    )
    user: Users
}
