import { IProduct } from "@interfaces/components";
import {
  AccordionButtonComponent,
  AccordionComponent,
  AccordionIconComponent,
  AccordionItemComponent,
  AccordionPanelComponent,
  CardBodyComponent,
  CardComponent,
  FlexComponent,
  GridItemComponent,
  HeadingComponent,
  ImageComponent,
  StackComponent,
  TextComponent,
} from "@libs/chakra";
import {
  CardStyled,
  DescriptionCardStyled,
  DiscountPercentageCardStyled,
  ImageStyled,
  PriceCardStyled,
  TitleCardStyled,
} from "./styles";

interface ICardProduct {
  product: IProduct;
}

export const CardProduct = ({ product }: ICardProduct) => {
  return (
    <GridItemComponent colSpan={2}>
      <CardComponent
        as="li"
        maxW="sm"
        data-test={`product-${product.id}`}
        {...CardStyled}
        // onClick={() => redirectPage(`detailsproduct/${product.image}`)}
      >
        <AccordionComponent defaultIndex={[0]} allowMultiple>
          <AccordionItemComponent>
            <AccordionButtonComponent>
              <CardBodyComponent>
                <ImageComponent
                  src={`../src/assets/img/${product.image}`}
                  alt={product.description}
                  loading="lazy"
                  {...ImageStyled}
                />

                <StackComponent {...DescriptionCardStyled}>
                  <HeadingComponent {...TitleCardStyled}>
                    {product.name}
                  </HeadingComponent>
                  <AccordionIconComponent />

                  <AccordionPanelComponent pb={4}>
                    {product.description}
                    <FlexComponent {...PriceCardStyled}>
                      <TextComponent
                        textDecoration={
                          product.promotional_price && "line-through"
                        }
                      >
                        R${product.price}
                      </TextComponent>
                      {!!product.promotional_price && (
                        <TextComponent>
                          ${product.promotional_price}
                        </TextComponent>
                      )}
                    </FlexComponent>
                    {!!product.discount_percentage && (
                      <FlexComponent {...DiscountPercentageCardStyled}>
                        <TextComponent>
                          ${product.discount_percentage} OFF
                        </TextComponent>
                      </FlexComponent>
                    )}
                  </AccordionPanelComponent>
                </StackComponent>
              </CardBodyComponent>
            </AccordionButtonComponent>
          </AccordionItemComponent>
        </AccordionComponent>
      </CardComponent>
    </GridItemComponent>
  );
};
