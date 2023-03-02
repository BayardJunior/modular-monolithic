import Product from "../../domain/product.entity";
import AddProductUseCase from "./add-product.usecase";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn(),
  };
};

describe("Add Product use case unit test", () => {
  it("should add a product", async () => {
    const productRepository = MockRepository();
    const usecase = new AddProductUseCase(productRepository);

    const input = {
      name: "product 1",
      description: "description 1",
      purchasePrice: 100,
      sotck: 10,
    };

    const result = await usecase.execut(input);

    expect(productRepository.add).toHaveBeenCalled();
    expect(result.id).toBeDefined;
    expect(result.name).toBe(input.name);
    expect(result.description).toBe(input.description);
    expect(result.purchasePrice).toBe(input.purchasePrice);
    expect(result.sotck).toBe(input.sotck);
  });
});
