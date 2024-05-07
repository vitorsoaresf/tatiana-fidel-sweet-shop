import { ChakraProvider } from "@libs/chakra.ts";
import { theme } from "@styles";
import { ProductProvider } from "./ProductsProvider";

export const AppProvider = ({ children }: any) => (
  <ProductProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </ProductProvider>
);
