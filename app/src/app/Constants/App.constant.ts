export const ABOUT: string = "ABOUT";
export const CONTACT_US: string = "CONTACT_US";
export const HOME: string = "HOME";
export const RECORDS = "RECORDS";

export interface NavbarItem {
  id: string;
  value: string;
  label: string;
  url: string;
  icon: string;
}

export const NAVBAR_ITEMS: Array<NavbarItem> = [
  { id: HOME, value: HOME, label: "Home", url: "/", icon: "" },
  { id: ABOUT, value: ABOUT, label: "About", url: "/about", icon: "" },
  {
    id: CONTACT_US,
    value: CONTACT_US,
    label: "Contact Us",
    url: "/contact-us",
    icon: "",
  },
  {
    id: RECORDS,
    value: RECORDS,
    label: "Records",
    url: "/records",
    icon: "",
  },
];
