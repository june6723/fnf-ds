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
        d="M13 3h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0V5H9a1 1 0 0 1 0-2h2V1a1 1 0 1 1 2 0v2Zm-3-1.983V2H9a2 2 0 1 0 0 4h1v1c0 .279.057.544.16.785l-1.71.855c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5a.992.992 0 0 1 .07-1.81l6.99-3a1.006 1.006 0 0 1 .79 0l1.6.687Zm.91 7.66a2 2 0 0 0 3.085-1.54l.555-.277c.14-.07.29-.11.45-.11.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5C.23 8.48 0 8.14 0 7.75c0-.55.45-1 1-1 .16 0 .31.04.45.11L8 10.13l2.91-1.453ZM15 10.25c.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5c-.32-.16-.55-.5-.55-.89 0-.55.45-1 1-1 .16 0 .31.04.45.1L8 13.63l6.55-3.27c.14-.07.29-.11.45-.11Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceNewLayersIcon = convertIcon(Icon, "interface-new-layers");
export default InterfaceNewLayersIcon;
