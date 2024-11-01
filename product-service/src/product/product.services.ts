import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async createProduct(name: string, price: string) {
    try {
      const product = await prisma.product.create({
        data: {
          name: name,
          price: price,
        },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async getProduct(id: string) {
    try {
      const product = await prisma.product.findUnique({
        where: {
          id: id,
        },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  }
}
