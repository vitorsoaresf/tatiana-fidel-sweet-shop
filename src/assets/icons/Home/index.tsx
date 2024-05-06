import { IIconComponent } from "@interfaces/components";
import { IconComponent } from "@libs/chakra";
import { IoHome } from "react-icons/io5";

export const IconHome = ({
  width = "20px",
  height = "20px",
}: IIconComponent) => {
  return <IconComponent as={IoHome} width={width} height={height} />;
};
