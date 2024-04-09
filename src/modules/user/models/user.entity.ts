import { 
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { IsEmail } from 'class-validator';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ comment: 'nickname for show', default: '' })
  name: string;

  @Column({ comment: 'email for login' })
  @IsEmail()
  email: string;

  @Column({ comment: 'validate the email date' })
  email_verified_at: Date;

  @Column({ comment: 'password for login' })
  password: string;
  
  @Column()
  remember_token: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;

  @Column()
  avatar: string;

  @Column()
  description: string;

  @Column()
  fcm_token: string;

  @Column({ comment: '1 is for online / 0 is for offline', default: 1 })
  online: number;

  @Column()
  open_id: number;

  @Column()
  type: number;
}