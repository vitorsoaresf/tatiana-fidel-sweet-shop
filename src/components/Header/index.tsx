import BagImg from "@assets/img/shopping_img.svg";
import UserImg from "@assets/img/user.svg";
import {
  ContainerHeaderStyled,
  ContainerImageLogoStyled,
  ContainerItemListStyled,
  ContainerListStyled,
  QuantityProductsCartStyled,
} from "./styles";
import {
  FlexComponent,
  HeadingComponent,
  ImageComponent,
  ListItemComponent,
  TextComponent,
  UnorderedListComponent,
} from "@libs/chakra";
import { Link, useNavigate } from "@libs/reactRouterDom";
import { Input } from "@components";
import { Icon } from "@assets/icons";
import { useCart } from "@hooks/useCart";
import { useProduct } from "@hooks/useProducts";
import { useEffect } from "@libs/react";
import { useProductContext } from "@contexts/ProductsProvider/context";
import ImgLogo from "@assets/img/logo_app.svg";
import { theme } from "@styles";

export const Header = () => {
  const navigate = useNavigate();
  const { cartState, loadProductsCart } = useCart();
  const { filteByrTerm } = useProduct();
  const { productState } = useProductContext();

  useEffect(() => {
    loadProductsCart();
  }, []);

  return (
    <FlexComponent
      as="nav"
      backdropFilter="blur(10px)"
      {...ContainerHeaderStyled}
    >
      <ImageComponent
        src={ImgLogo}
        alt="Não há produtos no carrinho"
        loading="lazy"
        data-test="logo"
        onClick={() => navigate("/")}
        {...ContainerImageLogoStyled}
      />

      <UnorderedListComponent {...ContainerListStyled}>
        <Input
          placeholder="Quero comprar algo específico..."
          onChange={(e) => filteByrTerm(e.target.value)}
          value={productState.term}
          actionBtRightPosition={Icon["search"]}
          width={["310px", "310px", "310px", "350px"]}
          data-test="input-search-product"
          color={theme.palette.pink["1000"]}
          borderColor={theme.palette.pink["1000"]}
          _focusVisible={{
            borderColor: theme.palette.pink["1000"],
          }}
          _placeholder={{ color: theme.palette.pink["1000"] }}
        />

        <ListItemComponent
          {...ContainerItemListStyled}
          _hover={{
            color: theme.palette.white,
          }}
        >
          <Link to="/" style={{ width: "max-content" }}>
            {Icon["home"]}
          </Link>
        </ListItemComponent>
      </UnorderedListComponent>
    </FlexComponent>
  );
};
