import { Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService:ProductService) {}

    // to add new product
  @Post()
  addProduct(): any { 
      
  }
}
