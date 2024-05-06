import {
  DividerComponent,
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  SelectComponent,
  TextComponent,
} from "@libs/chakra";
import { useProduct } from "@hooks/useProducts";
import { CardProduct, Paging, ButtonFilterProduct } from "@components";
import { IProduct } from "@interfaces/components";
import {
  ButtonsFilterStyled,
  ContainerImageMainStyled,
  ContainerInfoStyled,
  ContainerNotFoundProducts,
  FlowerImgStyled,
  HomeStyled,
  ImageMainStyled,
  OrderElementsStyled,
  PagingContainerStyled,
  ProductListStyled,
  SelectElementsStyled,
} from "./styles";
import {
  ELEMENT_PER_PAGE,
  CATEGORY_LIST,
  ORDER_LIST,
} from "@constants/Products";
import { useProductContext } from "@contexts/ProductsProvider/context";
import { useEffect, useState } from "@libs/react";
import { theme } from "@styles";

export const Home = () => {
  const [pageSelected, setPageSelected] = useState(0);
  const { productState, productDispatch } = useProductContext();
  const {
    countPage,
    handlePagination,
    quantityProducts,
    filterProductsByCategory,
    filterProductsByOrder,
    loadProducts,
  } = useProduct();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <FlexComponent {...ContainerImageMainStyled}>
        <ImageComponent
          src="../src/assets/img/banner-main.svg"
          alt="ecommerce de produtos"
          loading="lazy"
          {...ImageMainStyled}
        />

        <FlexComponent {...ContainerInfoStyled}>
          <HeadingComponent fontSize={theme.typography.fontSize.xxxxl}>
            Bem-vindo à
            <strong style={{ color: theme.palette.pink["1000"] }}>
              {" "}
              Tatiana Verza
            </strong>{" "}
            transformando ingredientes em{" "}
            <strong style={{ color: theme.palette.pink["1000"] }}>
              doces
            </strong>{" "}
            momentos de felicidade, uma mordida de cada vez.
          </HeadingComponent>

          <DividerComponent style={{ color: theme.palette.pink["1000"] }} />
          <HeadingComponent fontSize="24px">
            Explore nossa seleção e deixe-nos adoçar seus momentos especiais com
            nossa paixão pelo doce.
          </HeadingComponent>
        </FlexComponent>

        <FlexComponent {...FlowerImgStyled}>
          <ImageComponent src="../src/assets/img/flower1.svg" loading="lazy" />
        </FlexComponent>
      </FlexComponent>

      <FlexComponent {...HomeStyled}>
        <FlexComponent {...OrderElementsStyled}>
          <TextComponent>
            {productState.listFiltered.length} Produtos
          </TextComponent>

          <FlexComponent gap="8px">
            <SelectComponent
              placeholder="Categoria"
              onChange={(e: any) => filterProductsByCategory(e.target.value)}
              value={productState.category}
              {...SelectElementsStyled}
            >
              {CATEGORY_LIST.map((item: any) => (
                <option key={crypto.randomUUID()} value={item.value}>
                  {item.label}
                </option>
              ))}
            </SelectComponent>

            <SelectComponent
              placeholder="Ordenar"
              onChange={(e: any) => filterProductsByOrder(e.target.value)}
              value={productState.order}
              {...SelectElementsStyled}
            >
              {ORDER_LIST.map((item: any) => (
                <option key={crypto.randomUUID()} value={item.value}>
                  {item.label}
                </option>
              ))}
            </SelectComponent>
          </FlexComponent>
        </FlexComponent>

        <FlexComponent as="ul" data-test="list-products" {...ProductListStyled}>
          {productState.listFiltered.length > 0 ? (
            productState.listFiltered
              .slice(countPage.rangeMin, countPage.rangeMax)
              .map((item: IProduct) => (
                <CardProduct key={crypto.randomUUID()} product={item} />
              ))
          ) : (
            <FlexComponent {...ContainerNotFoundProducts}>
              <HeadingComponent data-test="not-found-products">
                Não foi possível encontrar nenhum produto.
              </HeadingComponent>
              <ImageComponent
                src="../src/assets/img/eyes.svg"
                alt="Não há produtos para serem visualizados"
                loading="lazy"
              />
            </FlexComponent>
          )}
        </FlexComponent>

        {/* {quantityProducts > 0 && (
          <FlexComponent {...PagingContainerStyled}>
            {new Array(quantityProducts).fill("").map((_, index: number) => (
              <Paging
                key={crypto.randomUUID()}
                label={"" + (index + 1)}
                active={pageSelected === index + 1}
                onClick={() => {
                  setPageSelected(index + 1);
                  handlePagination(
                    (index + 1) * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE,
                    (index + 1) * ELEMENT_PER_PAGE
                  );
                }}
              />
            ))}
            <Paging
              key={crypto.randomUUID()}
              label=">"
              onClick={() => {
                setPageSelected(quantityProducts);

                handlePagination(
                  quantityProducts +
                    productState.listFiltered.length -
                    ELEMENT_PER_PAGE,
                  quantityProducts + productState.listFiltered.length
                );
              }}
            />
          </FlexComponent>
        )} */}
      </FlexComponent>
    </>
  );
};
