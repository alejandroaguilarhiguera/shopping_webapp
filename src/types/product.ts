export interface PackageDimensions {
    height: number;
    length: number;
    weight: number;
    width: number;
}
export interface Image {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path?: string,
    width: number,
    height: number,
    size: number,
    url: string,
} 
export interface Media {
    data: {
        id: number,
        attributes: {
          name: string,
          alternativeText: string,
          caption: string,
          width: number,
          height: number,
          formats: {
            thumbnail: Image,
            small: Image
          },
          hash: string,
          ext: string,
          mime: string,
          size: number,
          url: string,
          previewUrl?: string,
          provider: string,
          provider_metadata: { [field: string]: string },
          createdAt: string,
          updatedAt: string
        }
    }
} 

export interface ProductAttributes {
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    price: number;
    image?: Media;
}

        
      
    

export interface ProductCreationAttributes {
    id?: number;
    name: ProductAttributes['name'];
    description?: ProductAttributes['description'];
}

export interface Product {
    id: number;
    attributes: ProductAttributes,
}
