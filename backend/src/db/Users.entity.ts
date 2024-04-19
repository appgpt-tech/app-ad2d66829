//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  mobileNumber: string;

  @Column('text', { nullable: true })
  accountNumber: string;

  @Column('text', { nullable: true })
  password: string;
}
