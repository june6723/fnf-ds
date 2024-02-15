import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3C1 1.89543 1.89543 1 3 1H7.58425C8.11468 1 8.62339 1.21071 8.99846 1.58579L14.4111 6.99846C15.1922 7.77951 15.1922 9.04584 14.4111 9.82689L9.82689 14.4111C9.04584 15.1922 7.77951 15.1922 6.99846 14.4111L1.58579 8.99846C1.21071 8.62339 1 8.11468 1 7.58425V3ZM4.48702 2.99258C3.66167 2.99258 2.99258 3.66167 2.99258 4.48702C2.99258 5.31238 3.66167 5.98146 4.48702 5.98146C5.31238 5.98146 5.98146 5.31238 5.98146 4.48702C5.98146 3.66167 5.31238 2.99258 4.48702 2.99258Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionTagIcon = convertIcon(Icon, "action-tag");
export default ActionTagIcon;
