import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.services';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
