import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductService) private readonly productRepository: Repository<ProductService>) { }
  
  getProduct(): any {
    
  }
}
