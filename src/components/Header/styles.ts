import { ListProps } from "@chakra-ui/react";
import { StyleComponents } from "@interfaces/components";
import { theme } from "@styles";

export const ContainerHeaderStyled: StyleComponents = {
  padding: "20px 20px",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: ["column", "column", "row"],
  fontFamily: theme.typography.fonts.poppins,
  justifyContent: ["center", "center", "space-between"],
  alignItems: "center",
  minHeight: "111px",
  position: "fixed",
  width: "100%",
  zIndex: 3,
};

export const ContainerImageLogoStyled: StyleComponents = {
  width: "400px",
  cursor: "pointer",
};

export const ContainerListStyled: StyleComponents | ListProps = {
  display: "flex",
  justifyContent: ["center", "center", "end"],
  textDecoration: "none",
  listStyleType: "none",
  width: "100%",
  alignItems: "center",
  gap: "20px",
  margin: 0,
  flexWrap: "wrap",
  color: theme.palette.pink["1000"],
};

export const styledHover = {
  _hover: { textDecor: "underline" },
};

export const ContainerItemListStyled: StyleComponents = {
  ...styledHover,
  fontWeight: "bold",
  display: "flex",
  alignItems: "flex-end",
  gap: "16px",
};

export const QuantityProductsCartStyled: StyleComponents = {
  fontSize: theme.typography.fontSize.sm,
  padding: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20px",
  height: "20px",
  backgroundColor: theme.palette.red["550"],
  color: theme.palette.white,
  top: "60px",
  borderRadius: "100%",
};
