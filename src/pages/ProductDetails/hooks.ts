import { useParams } from "@libs/reactRouterDom";
import { IProduct } from "@interfaces/components";
import Products from "@data/products.json";

export const useProductDetails = () => {
  const { image: imageProduct } = useParams();

  const product: IProduct = Products.find(
    (item) => item.image === imageProduct
  ) as IProduct;

  return {
    product,
  };
};
