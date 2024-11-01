import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.services';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('')
  async createProduct(@Body() body: { name: string; price: string }) {
    try {
      const result = await this.productService.createProduct(
        body.name,
        body.price,
      );
      return result;
    } catch (er) {
      console.log(er);
    }
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    try {
      const result = await this.productService.getProduct(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
