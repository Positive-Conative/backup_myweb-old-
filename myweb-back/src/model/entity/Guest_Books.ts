import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Guest_Coments } from "./Guest_Coments";

@Entity("Guest_Books")
export class Guest_Books{
    @PrimaryGeneratedColumn({ 
        comment: 'Guestbook id'
    })
    id: number;

    @Column({
        length:25,
        comment: '작성자명'
    })
    user_name: string;

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

    @OneToMany(
        (type)=>Guest_Coments,
        (guest_comments)=>guest_comments.guest_books
    )
    guest_comments:Guest_Coments[];
}
