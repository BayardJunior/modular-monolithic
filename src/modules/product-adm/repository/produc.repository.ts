import Product from "../domain/product.entity";
import ProductGatway from "../gateway/product-gatway";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductGatway {
  async add(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  find(id: string): Promise<Product> {
    throw new Error("Not implemented");
  }
}
