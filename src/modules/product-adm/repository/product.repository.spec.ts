import { Sequelize } from "sequelize-typescript";
import Id from "../../@shared/domain/value-object/id.value-object";
import Product from "../domain/product.entity";
import ProductRepository from "./produc.repository";
import ProductModel from "./product.model";

describe("ProductRepository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const poductProps = {
      id: new Id("1"),
      name: "Product 1",
      description: "Description Product 1",
      purchasePrice: 100,
      stock: 10,
    };

    const product = new Product(poductProps);
    const productRepository = new ProductRepository();
    productRepository.add(product);

    const productDb = await ProductModel.findOne({
      where: { id: poductProps.id.id },
    });
  });
});
