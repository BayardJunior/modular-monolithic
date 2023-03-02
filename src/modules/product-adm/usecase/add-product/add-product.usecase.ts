import Id from "../../../@shared/domain/value-object/id.value-object";
import Product from "../../domain/product.entity";
import ProductGatway from "../../gateway/product-gatway";
import { AddProductInputDto, AddProductOutPutDto } from "./add-product.dto";

export default class AddProductUseCase {
  private _productRepository: ProductGatway;

  constructor(_productRepository: ProductGatway) {
    this._productRepository = _productRepository;
  }

  async execut(input: AddProductInputDto): Promise<AddProductOutPutDto> {
    const props = {
      id: new Id(input.id),
      name: input.name,
      description: input.description,
      purchasePrice: input.purchasePrice,
      stock: input.sotck,
    };

    const product = new Product(props);
    this._productRepository.add(product);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      sotck: product.stock,
      createdAt: product.createdAt,
      updateAt: product.updatedAt,
    };
  }
}
