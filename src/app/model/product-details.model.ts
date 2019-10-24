export class ProductDetailsModel {
    productName: string; // Mandatory
    productID: string; // Mandatory
    productPrice: string; // Mandatory
    availableQuality: string;
    productStatus: string; //'Out of stock - OUT_OF_STOCK, Available - AVAILABLE // Mandatory
    productDescription: string; // Mandatory
    productSizes: Array<string>; // Mandatory
    productImagePath: string; // Mandatory
    prodcutCategory: string;
}


export class ProductModel {
    productName: string;
    productImagePath: string;
}
