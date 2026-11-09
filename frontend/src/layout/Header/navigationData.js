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
    href: "/services#commercial",
    children: [
      {
        label: "Commercial Deep Kitchen Cleaning",
        href: "/commercial/deep-kitchen-cleaning",
      },
      {
        label: "Kitchen Exhaust Duct Cleaning",
        href: "/commercial/duct-cleaning",
      },
      {
        label: "Grease Filter Cleaning & Exchange",
        href: "/commercial/filter-cleaning",
      },
      {
        label: "Kitchen Exhaust Maintenance & Repairs",
        href: "/commercial/maintenance",
      },
    ],
  },
  {
    label: "Residential",
    href: "/services#residential",
    children: [
      {
        label: "Residential Deep Kitchen Cleaning",
        href: "/residential/deep-kitchen-cleaning",
      },
      {
        label: "Range Hood & Filter Cleaning",
        href: "/residential/hood-cleaning",
      },
      {
        label: "Move In & Move Out Kitchen Cleaning",
        href: "/residential/move-in-move-out-cleaning",
      },
      {
        label: "Routine Kitchen Maintenance & Repairs",
        href: "/residential/maintenance",
      },
    ],
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];