import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value-object/id.value-object";

type ProductPros = {
  id?: Id;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export default class Product extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _description: string;
  private _purchasePrice: number;
  private _stock: number;

  constructor(props: ProductPros) {
    super(props.id);
    this._name = props.name;
    this._description = props.description;
    this._purchasePrice = props.purchasePrice;
    this._stock = props.stock;
  }

  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get purchasePrice() {
    return this._purchasePrice;
  }
  get stock() {
    return this._stock;
  }

  set name(value: string) {
    this._name = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set purchasePrice(value: number) {
    this._purchasePrice = value;
  }

  set stock(value: number) {
    this.stock = value;
  }
}
