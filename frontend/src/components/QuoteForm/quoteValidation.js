const services = {
  commercial: {
    '/commercial/hood-cleaning': 'Commercial Hood Cleaning',
    '/commercial/duct-cleaning': 'Kitchen Exhaust Duct Cleaning',
    '/commercial/filter-cleaning': 'Grease Filter Cleaning & Exchange',
    '/commercial/maintenance': 'Kitchen Exhaust Maintenance & Repairs',
  },
  residential: {
    '/residential/hood-cleaning': 'Residential Range Hood Cleaning',
    '/residential/vent-cleaning': 'Kitchen Exhaust Duct Cleaning',
    '/residential/degreasing': 'Range Hood Filter Cleaning & Replacement',
    '/residential/maintenance': 'Range Hood Maintenance & Repairs',
  },
};
const provinces = 'BC AB SK MB ON QC NB NS PE NL YT NT NU'.split(' ');
const referrals = { google: 'Google Search', 'social-media': 'Social Media', referral: 'Friend / Family Referral', 'returning-customer': 'Returning Customer', other: 'Other' };
const limits = { firstName:80,lastName:80,serviceCategory:20,serviceRequired:100,companyName:120,jobTitle:100,address:200,city:100,province:2,postalCode:7,phone:30,email:254,newCustomer:3,referralSource:30,message:3000 };
function validateQuotePayload(body) {
  const errors = {}, values = {};
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { errors: { form: 'Please submit a valid form.' }, values };
  for (const [key, max] of Object.entries(limits)) {
    const raw = body[key] ?? '';
    if (typeof raw !== 'string') { errors[key] = 'Please enter a valid text value.'; values[key] = ''; continue; }
    values[key] = raw.trim();
    if (raw.length > max) errors[key] = `Please use no more than ${max} characters.`;
    if (
  key !== "message" &&
  (
    raw.includes("\r") ||
    raw.includes("\n") ||
    raw.includes("\0")
  )
) {
  errors[key] = "Please use a single line of text.";
}
  }
  for (const key of ['firstName','lastName','address','city','phone','email','message']) {
    if (!values[key]) errors[key] ||= 'Please complete this field.';
  }
  const category = Object.hasOwn(services, values.serviceCategory) ? services[values.serviceCategory] : null;
  if (!category) errors.serviceCategory = 'Please select Commercial or Residential.';
  if (!category || (values.serviceRequired !== 'not-sure' && !Object.hasOwn(category, values.serviceRequired))) errors.serviceRequired = 'Please select a service from your chosen category.';
  if (values.serviceCategory === 'commercial' && !values.companyName) errors.companyName = 'Company name is required for commercial enquiries.';
  if (!provinces.includes(values.province)) errors.province = 'Please select a valid province or territory.';
  if (!/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(values.postalCode)) errors.postalCode = 'Enter a valid Canadian postal code, such as V3W 1A1.';
  if (!/^\d{10,15}$/.test(values.phone.replace(/\D/g,''))) errors.phone = 'Please enter a valid phone number (10–15 digits).';
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!['yes','no'].includes(values.newCustomer)) errors.newCustomer = 'Please select Yes or No.';
  if (!Object.hasOwn(referrals,values.referralSource)) errors.referralSource = 'Please tell us how you heard about HoodClean.';
  if (values.message.length < 10) errors.message = 'Please provide at least 10 characters about your project.';
  if (body.privacyConsent !== true) errors.privacyConsent = 'Please acknowledge the Privacy Policy.';
  values.privacyConsent = body.privacyConsent === true;
  values.postalCode = values.postalCode.replace(/[ -]/g,'').toUpperCase().replace(/^(.{3})(.{3})$/, '$1 $2');
  return { errors, values };
}

export const quoteServiceCategories = Object.entries(services).map(([value, entries]) => ({
  label: value === 'commercial' ? 'Commercial' : 'Residential', value,
  services: Object.entries(entries).map(([href, label]) => ({href, label})),
}));
const provinceNames = ['British Columbia','Alberta','Saskatchewan','Manitoba','Ontario','Quebec','New Brunswick','Nova Scotia','Prince Edward Island','Newfoundland and Labrador','Yukon','Northwest Territories','Nunavut'];
export const provinceOptions = provinces.map((value,index)=>({value,label:provinceNames[index]}));
export const referralOptions = Object.entries(referrals).map(([value,label])=>({value,label}));
export function createInitialQuoteValues() {
  return {...Object.fromEntries(Object.keys(limits).map(key=>[key,''])), province:'BC', privacyConsent:false};
}
export function formatCanadianPostalCode(value) {
  const raw = String(value ?? '').toUpperCase();
  const compact = raw.replace(/[\s-]/g,'');
  return compact.length === 6 ? `${compact.slice(0,3)} ${compact.slice(3)}` : raw;
}
export function validateQuote(values) { return validateQuotePayload(values).errors; }
