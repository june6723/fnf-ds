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
        d="M2 2H0v7h2c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Zm13.99 4.38c.08-.58-.44-1.02-1.15-1.05-.25-.01-.52-.03-.81-.05.02 0 .05-.01.07-.01.7-.1 1.34-.49 1.41-1.07.06-.58-.46-.97-1.17-1.04-.25-.02-.52-.04-.79-.06.47-.15.84-.42.87-.93.04-.58-.79-1.03-1.5-1.09-.27-.02-.51-.04-.73-.05h-.09c-.23-.02-.43-.02-.62-.03C8.35.95 5.66 1.47 4 2.51v6c2.14 1.29 4.76 3.59 4.21 5.51-.18.59.31 1.05.98.98.81-.09 1.37-.91 1.4-1.78.04-1-.15-2.01-.5-2.91-.04-.25.01-.5.37-.53.49-.03 1.11-.06 1.59-.08.26 0 .51-.01.75-.02h.01c.41-.02.8-.05 1.13-.09.7-.09 1.35-.47 1.43-1.05.08-.58-.44-.97-1.15-1.05-.05-.01-.11-.01-.16-.02.17-.01.33-.03.49-.05.72-.08 1.37-.46 1.44-1.04Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceThumbsDownIcon = convertIcon(Icon, "interface-thumbs-down");
export default InterfaceThumbsDownIcon;
