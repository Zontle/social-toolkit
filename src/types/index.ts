export interface SidebarElement {
  icon: JSX.Element;
  className?: string;
  slug?: string;
}
export interface MenuOnChange {
  (key: string | undefined): any;
}
