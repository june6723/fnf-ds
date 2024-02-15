import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12.5 0a.5.5 0 0 1 .5.5V9a1 1 0 0 1 1 1v2h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H13v1a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H2v-2a1 1 0 0 1 1-1V.5a.5.5 0 0 1 1 0V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V.5a.5.5 0 0 1 .5-.5ZM9 8H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm3.5 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm-8 0h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1ZM9 9a.5.5 0 0 1 .5.5v1l-.008.09A.5.5 0 0 1 9 11H7l-.09-.008a.5.5 0 0 1-.41-.492v-1l.008-.09A.5.5 0 0 1 7 9h2Zm2-5H5v2h6V4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceTruckIcon = convertIcon(Icon, "interface-truck");
export default InterfaceTruckIcon;
