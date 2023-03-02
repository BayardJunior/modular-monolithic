export interface AddProductInputDto {
  id?: string;
  name: string;
  description: string;
  purchasePrice: number;
  sotck: number;
}

export interface AddProductOutPutDto {
  id: string;
  name: string;
  description: string;
  purchasePrice: number;
  sotck: number;
  createdAt: Date;
  updateAt: Date;
}
