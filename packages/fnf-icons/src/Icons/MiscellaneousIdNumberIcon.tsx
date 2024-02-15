import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M2 3h12c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2Zm0 2v7h12V5H2Zm4.877 4.844c.424.172.91.367 1.023.636.121.267.105.442.1.5-.001.013-.002.02 0 .02H3.01s-.05-.19.09-.52c.114-.269.599-.464 1.023-.636.097-.039.191-.077.277-.114.406-.186.415-.3.425-.442l.005-.058v-.07c-.16-.14-.3-.33-.38-.56v-.01a.88.88 0 0 1-.05-.15c-.11-.02-.18-.14-.2-.24a.401.401 0 0 1-.06-.27c.01-.16.08-.23.15-.26v-.03c0-.2.01-.49.06-.67 0-.06.01-.11.03-.16.07-.23.21-.44.4-.58.19-.15.47-.23.72-.23s.53.08.73.23c.19.14.33.35.4.58.01.06.02.11.03.16.03.19.05.47.05.67v.03c.07.02.13.1.15.26.01.12-.03.23-.06.27-.03.1-.09.22-.19.23a.732.732 0 0 0-.025.075c-.008.025-.015.05-.025.075-.01.01-.01.02-.01.02-.08.23-.21.42-.37.56v.07c.003.022.004.044.005.065.008.14.015.261.415.435.086.037.18.075.277.114ZM10 6h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1Zm2 3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousIdNumberIcon = convertIcon(Icon, "miscellaneous-number");
export default MiscellaneousIdNumberIcon;
