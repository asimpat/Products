import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type:'varchar',
  })
  title: string;

  @Column({
    type:'text',
  })
  description: string;

  @Column()
  price: number;
}
