import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Guest_Books } from "./Guest_Books";

@Entity("Guest_Coments")
export class Guest_Coments{
    @PrimaryGeneratedColumn({ 
        comment: 'Guestbook Comment id'
    })
    id: number;

    @Column({
        length:25,
        comment: '작성자명'
    })
    user_name: string;

    @Column({
        length:100,
        comment: '내용'
    })
    content: string;

    @ManyToOne(
        (type)=>Guest_Books,
        (guest_books)=>guest_books.guest_comments,
        {nullable: false}
    )
    guest_books: Guest_Books
}
