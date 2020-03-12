import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  UserId!: number;

  @Column({ length: 60 })
  UserName!: string;

  @Column({ length: 80 })
  Email!: string;

  @Column({ length: 40 })
  Password!: string;

  @Column({ length: 50, nullable: true })
  FirstName!: string;

  @Column({ length: 50, nullable: true })
  LastName!: string;
}
