import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerImageMainStyled: StyleComponents = {
  marginBottom: "67px",
  marginTop: ["200px", "0"],
  background: theme.palette.whiteAlpha["1100"],
  justifyContent: "space-between",
  flexDirection: ["column-reverse", "column-reverse", "row"],
  position: "relative",
};

export const ImageMainStyled: StyleComponents = {
  width: ["100%", "100%", "50%"],
  objectFit: "cover",
  marginTop: [],
};

export const ContainerInfoStyled: StyleComponents = {
  maxWidth: "782px",
  color: theme.palette.black,
  marginTop: ["10px", "10px", "200px"],
  marginRight: ["100px", "100px", "20px", "20px", "20px"],
  flexDirection: "column",
  gap: "20px",
  justifyContent: "flex-start",
  width: "100%",
  padding: "20px",
  zIndex: 2,
};

export const FlowerImgStyled: StyleComponents = {
  display: ["none", "none", "none", "none", "flex"],
  opacity: "0.6",
  bottom: "-1",
  width: "400px",
  height: "400px",
  left: "0",
  position: "absolute",
};

export const HomeStyled: StyleComponents = {
  padding: ["20px 20px", "20px 45px"],
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "200px",
};

export const ButtonsFilterStyled: StyleComponents = {
  display: "flex",
  flexDirection: ["column", "column", "column", "row", "row"],
  justifyContent: ["center", "center", "center", "center", "space-between"],
  alignItems: "center",
  width: "100%",
  gap: "25px",
  marginBottom: theme.spacing.xxxl,
};

export const OrderElementsStyled: StyleComponents = {
  justifyContent: "space-between",
  width: "100%",
  marginBottom: theme.spacing.xxl,
  fontSize: theme.typography.fontSize.xl,
};

export const SelectElementsStyled: StyleComponents = {
  maxWidth: ["200px", "200px", "311.38px"],
  maxHeight: "50px",
  minWidth: "200px",
};

export const ProductListStyled: StyleComponents = {
  gap: theme.spacing.lg,
  marginBottom: "40px",
};

export const PagingContainerStyled: StyleComponents = {
  gap: "12px",
};

export const ContainerNotFoundProducts: StyleComponents = {
  flexDirection: "column",
  gap: "24px",
};
