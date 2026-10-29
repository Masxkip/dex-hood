
import { navigationLinks } from "../../layout/Header/navigationData";

/* =========================================
   SERVICE CATEGORIES
   Reuse existing navigation information.
========================================= */

export const quoteServiceCategories = navigationLinks
  .filter(
    (item) =>
      item.children &&
      ["Commercial", "Residential"].includes(item.label)
  )
  .map((item) => ({
    label: item.label,
    value: item.label.toLowerCase(),
    services: item.children,
  }));

/* =========================================
   CANADIAN PROVINCES AND TERRITORIES
========================================= */

export const provinceOptions = [
  { value: "BC", label: "British Columbia" },
  { value: "AB", label: "Alberta" },
  { value: "SK", label: "Saskatchewan" },
  { value: "MB", label: "Manitoba" },
  { value: "ON", label: "Ontario" },
  { value: "QC", label: "Quebec" },
  { value: "NB", label: "New Brunswick" },
  { value: "NS", label: "Nova Scotia" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "YT", label: "Yukon" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
];

/* =========================================
   REFERRAL SOURCES
========================================= */

export const referralOptions = [
  { value: "google", label: "Google Search" },
  { value: "social-media", label: "Social Media" },
  { value: "referral", label: "Friend / Family Referral" },
  { value: "returning-customer", label: "Returning Customer" },
  { value: "other", label: "Other" },
];

/* =========================================
   INITIAL FORM VALUES
========================================= */

export function createInitialQuoteValues() {
  return {
    firstName: "",
    lastName: "",
    serviceCategory: "",
    serviceRequired: "",
    companyName: "",
    jobTitle: "",
    address: "",
    city: "",
    province: "BC",
    postalCode: "",
    phone: "",
    email: "",
    newCustomer: "",
    referralSource: "",
    message: "",
    privacyConsent: false,
  };
}

/* =========================================
   HELPERS
========================================= */

const isEmpty = (value) =>
  !String(value ?? "").trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const postalPattern =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

export function formatCanadianPostalCode(value) {
  const normalized = String(value ?? "")
    .replace(/[\s-]/g, "")
    .toUpperCase();

  if (normalized.length !== 6) {
    return String(value ?? "").toUpperCase();
  }

  return `${normalized.slice(0, 3)} ${normalized.slice(3)}`;
}

/* =========================================
   COMPLETE FORM VALIDATION

   Returns an object containing errors
   for fields that are currently invalid.
========================================= */

export function validateQuote(values) {
  const errors = {};

  /* NAME */

  if (isEmpty(values.firstName)) {
    errors.firstName = "Please enter your first name.";
  }

  if (isEmpty(values.lastName)) {
    errors.lastName = "Please enter your last name.";
  }

  /* SERVICE CATEGORY */

  const category = quoteServiceCategories.find(
    (item) => item.value === values.serviceCategory
  );

  if (!category) {
    errors.serviceCategory =
      "Please select Commercial or Residential.";
  }

  /* SPECIFIC SERVICE */

  const validServiceValues = category
    ? category.services.map((service) => service.href)
    : [];

  if (!values.serviceRequired) {
    errors.serviceRequired =
      "Please select the service you need.";
  } else if (
    values.serviceRequired !== "not-sure" &&
    !validServiceValues.includes(values.serviceRequired)
  ) {
    errors.serviceRequired =
      "Please select a service from your chosen category.";
  }

  /* BUSINESS INFORMATION */

  if (
    values.serviceCategory === "commercial" &&
    isEmpty(values.companyName)
  ) {
    errors.companyName =
      "Company name is required for commercial enquiries.";
  }

  /* SERVICE ADDRESS */

  if (isEmpty(values.address)) {
    errors.address = "Please enter the service address.";
  }

  if (isEmpty(values.city)) {
    errors.city = "Please enter your city.";
  }

  if (
    !provinceOptions.some(
      (option) => option.value === values.province
    )
  ) {
    errors.province =
      "Please select a valid province or territory.";
  }

  /* CANADIAN POSTAL CODE */

  const postalCode = String(values.postalCode ?? "").trim();

  if (!postalCode) {
    errors.postalCode = "Please enter your postal code.";
  } else if (!postalPattern.test(postalCode)) {
    errors.postalCode =
      "Enter a valid Canadian postal code, such as V3W 1A1.";
  }

  /* PHONE NUMBER */

  const phoneDigits = String(values.phone ?? "").replace(
    /\D/g,
    ""
  );

  if (!phoneDigits) {
    errors.phone = "Please enter your phone number.";
  } else if (
    phoneDigits.length < 10 ||
    phoneDigits.length > 15
  ) {
    errors.phone =
      "Please enter a valid phone number (10–15 digits).";
  }

  /* EMAIL ADDRESS */

  const email = String(values.email ?? "").trim();

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (
    email.length > 254 ||
    !emailPattern.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  /* NEW CUSTOMER */

  if (!["yes", "no"].includes(values.newCustomer)) {
    errors.newCustomer = "Please select Yes or No.";
  }

  /* REFERRAL SOURCE */

  if (
    !referralOptions.some(
      (option) => option.value === values.referralSource
    )
  ) {
    errors.referralSource =
      "Please tell us how you heard about HoodClean.";
  }

  /* PROJECT DESCRIPTION */

  const message = String(values.message ?? "").trim();

  if (!message) {
    errors.message = "Please describe your project.";
  } else if (message.length < 10) {
    errors.message =
      "Please provide at least 10 characters about your project.";
  }

  /* PRIVACY CONSENT */

  if (values.privacyConsent !== true) {
    errors.privacyConsent =
      "Please acknowledge the Privacy Policy.";
  }

  return errors;
}
