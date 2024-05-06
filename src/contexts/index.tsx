import { ChakraProvider } from "@libs/chakra.ts";
import { theme } from "@styles";
import { CartProvider } from "./CartProvider";
import { ProductProvider } from "./ProductsProvider";

export const AppProvider = ({ children }: any) => (
  <ProductProvider>
    <CartProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CartProvider>
  </ProductProvider>
);
