export const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Commercial",
    children: [
      {
        label: "Commercial Hood Cleaning",
        href: "/commercial/hood-cleaning",
      },
      {
        label: "Exhaust Duct Cleaning",
        href: "/commercial/duct-cleaning",
      },
      {
        label: "Grease Filter Cleaning",
        href: "/commercial/filter-cleaning",
      },
      {
        label: "Kitchen Exhaust Maintenance",
        href: "/commercial/maintenance",
      },
    ],
  },
  {
    label: "Residential",
    children: [
      {
        label: "Residential Hood Cleaning",
        href: "/residential/hood-cleaning",
      },
      {
        label: "Range Hood Degreasing",
        href: "/residential/degreasing",
      },
      {
        label: "Kitchen Vent Cleaning",
        href: "/residential/vent-cleaning",
      },
      {
        label: "Routine Hood Maintenance",
        href: "/residential/maintenance",
      },
    ],
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
];