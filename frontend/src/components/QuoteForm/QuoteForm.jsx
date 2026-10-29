
import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  UserRound,
  Building2,
  MapPin,
  MapPinned,
  Phone,
  Mail,
  BriefcaseBusiness,
  ChevronDown,
  MessageSquareText,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  quoteServiceCategories,
  provinceOptions,
  referralOptions,
  createInitialQuoteValues,
  formatCanadianPostalCode,
  validateQuote,
} from "./quoteValidation";

import "./QuoteForm.css";

/* =========================================
   REUSABLE INPUT FIELD
========================================= */

function QuoteField({
  idPrefix,
  values,
  getError,
  onChange,
  onBlur,
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
  icon: Icon,
  fullWidth = false,
  maxLength,
}) {
  const fieldId = `${idPrefix}-${name}`;
  const error = getError(name);

  return (
    <div
      className={`quote-form__field ${
        fullWidth ? "quote-form__field--full" : ""
      }`}
    >
      <label
        htmlFor={fieldId}
        className="quote-form__label"
      >
        {label}

        {required && (
          <span
            className="quote-form__required"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      <div
        className={`quote-form__control ${
          error ? "quote-form__control--invalid" : ""
        }`}
      >
        {Icon && (
          <Icon
            size={19}
            strokeWidth={1.9}
            className="quote-form__field-icon"
            aria-hidden="true"
          />
        )}

        <input
          id={fieldId}
          name={name}
          type={type}
          value={values[name]}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${fieldId}-error` : undefined
          }
          onChange={(event) =>
            onChange(name, event.target.value)
          }
          onBlur={() => onBlur(name)}
        />
      </div>

      {error && (
        <span
          id={`${fieldId}-error`}
          className="quote-form__field-error"
        >
          <AlertCircle
            size={15}
            aria-hidden="true"
          />
          {error}
        </span>
      )}
    </div>
  );
}

/* =========================================
   REUSABLE SELECT FIELD
========================================= */

function QuoteSelect({
  idPrefix,
  values,
  getError,
  onChange,
  onBlur,
  label,
  name,
  placeholder,
  required = false,
  disabled = false,
  children,
  fullWidth = false,
}) {
  const fieldId = `${idPrefix}-${name}`;
  const error = getError(name);

  return (
    <div
      className={`quote-form__field ${
        fullWidth ? "quote-form__field--full" : ""
      }`}
    >
      <label
        htmlFor={fieldId}
        className="quote-form__label"
      >
        {label}

        {required && (
          <span
            className="quote-form__required"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      <div
        className={`quote-form__control quote-form__control--select ${
          error ? "quote-form__control--invalid" : ""
        }`}
      >
        <select
          id={fieldId}
          name={name}
          value={values[name]}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${fieldId}-error` : undefined
          }
          onChange={(event) =>
            onChange(name, event.target.value)
          }
          onBlur={() => onBlur(name)}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {children}
        </select>

        <ChevronDown
          size={20}
          className="quote-form__select-arrow"
          aria-hidden="true"
        />
      </div>

      {error && (
        <span
          id={`${fieldId}-error`}
          className="quote-form__field-error"
        >
          <AlertCircle
            size={15}
            aria-hidden="true"
          />
          {error}
        </span>
      )}
    </div>
  );
}

/* =========================================
   MAIN REUSABLE QUOTE FORM
========================================= */

export default function QuoteForm({
  variant = "page",
}) {
  const idPrefix = useId();
  const formRef = useRef(null);

  /* =========================================
     FORM STATE
  ========================================= */

  const [formData, setFormData] = useState(
    createInitialQuoteValues
  );

  const [touched, setTouched] = useState({});

  const [submitAttempted, setSubmitAttempted] =
    useState(false);

  const [isReady, setIsReady] = useState(false);

  /* =========================================
     DERIVED VALUES
  ========================================= */

  const errors = validateQuote(formData);

  const isCommercial =
    formData.serviceCategory === "commercial";

  const selectedCategory = quoteServiceCategories.find(
    (category) =>
      category.value === formData.serviceCategory
  );

  const availableServices =
    selectedCategory?.services ?? [];

  const hasErrors = Object.keys(errors).length > 0;

  /* =========================================
     DISPLAY ERRORS AFTER:
     - FIELD BLUR
     - FORM REVIEW ATTEMPT
  ========================================= */

  const getError = (name) => {
    if (!touched[name] && !submitAttempted) {
      return null;
    }

    return errors[name] ?? null;
  };

  /* =========================================
     HANDLE FIELD CHANGES
  ========================================= */

  const handleFieldChange = (name, value) => {
    setFormData((previous) => {
      const next = {
        ...previous,
        [name]: value,
      };

      /* RESET SERVICE WHEN CATEGORY CHANGES */

      if (
        name === "serviceCategory" &&
        previous.serviceCategory !== value
      ) {
        next.serviceRequired = "";

        /* JOB TITLE ONLY APPLIES TO COMMERCIAL */

        if (value !== "commercial") {
          next.jobTitle = "";
        }
      }

      return next;
    });

    /* RECHECK FORM AFTER USER EDITS */

    setIsReady(false);

    /* RESET SERVICE ERROR VISIBILITY */

    if (name === "serviceCategory") {
      setTouched((previous) => ({
        ...previous,
        serviceRequired: false,
      }));
    }
  };

  /* =========================================
     HANDLE FIELD BLUR
  ========================================= */

  const handleFieldBlur = (name) => {
    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    /* FORMAT POSTAL CODE */

    if (name === "postalCode") {
      setFormData((previous) => {
        const formatted = formatCanadianPostalCode(
          previous.postalCode
        );

        if (formatted === previous.postalCode) {
          return previous;
        }

        return {
          ...previous,
          postalCode: formatted,
        };
      });
    }
  };

  /* =========================================
     REVIEW FORM

     PHASE 2: VALIDATION ONLY
     NO BACKEND REQUEST IS SENT YET.
  ========================================= */

  const handleReview = (event) => {
    event.preventDefault();

    const currentErrors = validateQuote(formData);

    const firstInvalidField =
      Object.keys(currentErrors)[0];

    setSubmitAttempted(true);
    setIsReady(!firstInvalidField);

    /* FOCUS FIRST INVALID FIELD */

    if (firstInvalidField) {
      const field = formRef.current?.querySelector(
        `[name="${firstInvalidField}"]`
      );

      field?.focus();
    }
  };

  /* =========================================
     SHARED FIELD PROPS
  ========================================= */

  const fieldProps = {
    idPrefix,
    values: formData,
    getError,
    onChange: handleFieldChange,
    onBlur: handleFieldBlur,
  };

  /* =========================================
     FORM JSX
  ========================================= */

  return (
    <div
      className={`quote-form quote-form--${variant}`}
    >
      {/* =====================================
          FORM INTRODUCTION
      ===================================== */}

      <div className="quote-form__header">

        <span className="eyebrow quote-form__eyebrow">
          Request a Quote
        </span>

        <h3 className="quote-form__title">
          Tell Us About Your Project
        </h3>

        <p className="quote-form__description">
          Complete the form below and our team
          will review your request and get in touch.
        </p>

      </div>

      {/* =====================================
          FORM
      ===================================== */}

      <form
        ref={formRef}
        className="quote-form__form"
        aria-label="HoodClean quote request form"
        onSubmit={handleReview}
        noValidate
      >
        <div className="quote-form__grid">

          {/* FIRST NAME */}

          <QuoteField
            {...fieldProps}
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            autoComplete="given-name"
            icon={UserRound}
            required
            maxLength={80}
          />

          {/* LAST NAME */}

          <QuoteField
            {...fieldProps}
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            autoComplete="family-name"
            icon={UserRound}
            required
            maxLength={80}
          />

          {/* =================================
              SERVICE CATEGORY
          ================================= */}

          <QuoteSelect
            {...fieldProps}
            label="Service Category"
            name="serviceCategory"
            placeholder="Select category"
            required
          >
            {quoteServiceCategories.map((category) => (
              <option
                key={category.value}
                value={category.value}
              >
                {category.label}
              </option>
            ))}
          </QuoteSelect>

          {/* =================================
              CONDITIONAL SERVICE SELECTION
          ================================= */}

          <QuoteSelect
            {...fieldProps}
            label="Service Required"
            name="serviceRequired"
            placeholder={
              selectedCategory
                ? "Select service"
                : "Select a category first"
            }
            required
            disabled={!selectedCategory}
          >
            {availableServices.map((service) => (
              <option
                key={service.href}
                value={service.href}
              >
                {service.label}
              </option>
            ))}

            {selectedCategory && (
              <option value="not-sure">
                Not Sure / Need Advice
              </option>
            )}
          </QuoteSelect>

          {/* =================================
              COMPANY NAME

              Required for Commercial.
              Optional for Residential.
          ================================= */}

          <QuoteField
            {...fieldProps}
            label="Company Name"
            name="companyName"
            placeholder={
              isCommercial
                ? "Your business name"
                : "Company name (optional)"
            }
            autoComplete="organization"
            icon={Building2}
            required={isCommercial}
            maxLength={120}
          />

          {/* =================================
              COMMERCIAL JOB TITLE
          ================================= */}

          {isCommercial && (
            <QuoteField
              {...fieldProps}
              label="Job Title"
              name="jobTitle"
              placeholder="Your job title"
              autoComplete="organization-title"
              icon={BriefcaseBusiness}
              maxLength={100}
            />
          )}

          {/* SERVICE ADDRESS */}

          <QuoteField
            {...fieldProps}
            label="Service Address"
            name="address"
            placeholder="Street address"
            autoComplete="street-address"
            icon={MapPin}
            required
            maxLength={200}
          />

          {/* CITY */}

          <QuoteField
            {...fieldProps}
            label="City"
            name="city"
            placeholder="Your city"
            autoComplete="address-level2"
            icon={Building2}
            required
            maxLength={100}
          />

          {/* PROVINCE */}

          <QuoteSelect
            {...fieldProps}
            label="Province / Territory"
            name="province"
            placeholder="Select province"
            required
          >
            {provinceOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </QuoteSelect>

          {/* POSTAL CODE */}

          <QuoteField
            {...fieldProps}
            label="Postal Code"
            name="postalCode"
            placeholder="A1A 1A1"
            autoComplete="postal-code"
            icon={MapPinned}
            required
            maxLength={7}
          />

          {/* PHONE NUMBER */}

          <QuoteField
            {...fieldProps}
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="(604) 555-0000"
            autoComplete="tel"
            icon={Phone}
            required
            maxLength={30}
          />

          {/* EMAIL ADDRESS */}

          <QuoteField
            {...fieldProps}
            label="Email Address"
            name="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            icon={Mail}
            required
            maxLength={254}
          />

          {/* =================================
              NEW CUSTOMER QUESTION
          ================================= */}

          <fieldset
            className="quote-form__field quote-form__field--radio"
            aria-describedby={
              getError("newCustomer")
                ? `${idPrefix}-newCustomer-error`
                : undefined
            }
          >
            <legend className="quote-form__label">
              Are You a New Customer?

              <span
                className="quote-form__required"
                aria-hidden="true"
              >
                *
              </span>
            </legend>

            <div
              className={`quote-form__radio-group ${
                getError("newCustomer")
                  ? "quote-form__radio-group--invalid"
                  : ""
              }`}
            >
              {["yes", "no"].map((value) => (
                <label
                  key={value}
                  className="quote-form__radio"
                >
                  <input
                    type="radio"
                    name="newCustomer"
                    value={value}
                    checked={
                      formData.newCustomer === value
                    }
                    required
                    onChange={(event) =>
                      handleFieldChange(
                        "newCustomer",
                        event.target.value
                      )
                    }
                    onBlur={() =>
                      handleFieldBlur("newCustomer")
                    }
                  />

                  <span>
                    {value === "yes" ? "Yes" : "No"}
                  </span>
                </label>
              ))}
            </div>

            {getError("newCustomer") && (
              <span
                id={`${idPrefix}-newCustomer-error`}
                className="quote-form__field-error"
              >
                <AlertCircle size={15} aria-hidden="true" />
                {getError("newCustomer")}
              </span>
            )}
          </fieldset>

          {/* REFERRAL SOURCE */}

          <QuoteSelect
            {...fieldProps}
            label="How Did You Hear About Us?"
            name="referralSource"
            placeholder="Select an option"
            required
          >
            {referralOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </QuoteSelect>

          {/* =================================
              PROJECT DESCRIPTION
          ================================= */}

          <div className="quote-form__field quote-form__field--full">

            <label
              htmlFor={`${idPrefix}-message`}
              className="quote-form__label"
            >
              Tell Us More About Your Project

              <span
                className="quote-form__required"
                aria-hidden="true"
              >
                *
              </span>
            </label>

            <div
              className={`quote-form__control quote-form__control--textarea ${
                getError("message")
                  ? "quote-form__control--invalid"
                  : ""
              }`}
            >
              <MessageSquareText
                size={20}
                strokeWidth={1.9}
                className="quote-form__field-icon"
                aria-hidden="true"
              />

              <textarea
                id={`${idPrefix}-message`}
                name="message"
                rows={5}
                value={formData.message}
                placeholder="Tell us about your kitchen, cleaning needs, or any specific service you require..."
                required
                maxLength={3000}
                aria-invalid={Boolean(getError("message"))}
                aria-describedby={
                  getError("message")
                    ? `${idPrefix}-message-error`
                    : undefined
                }
                onChange={(event) =>
                  handleFieldChange(
                    "message",
                    event.target.value
                  )
                }
                onBlur={() =>
                  handleFieldBlur("message")
                }
              />
            </div>

            {getError("message") && (
              <span
                id={`${idPrefix}-message-error`}
                className="quote-form__field-error"
              >
                <AlertCircle size={15} aria-hidden="true" />
                {getError("message")}
              </span>
            )}

            <span className="quote-form__character-count">
              {formData.message.length} / 3000 characters
            </span>
          </div>

        </div>

        {/* =====================================
            PRIVACY ACKNOWLEDGEMENT
        ===================================== */}

        <label
          className={`quote-form__privacy ${
            getError("privacyConsent")
              ? "quote-form__privacy--invalid"
              : ""
          }`}
        >
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            required
            aria-invalid={Boolean(
              getError("privacyConsent")
            )}
            aria-describedby={
              getError("privacyConsent")
                ? `${idPrefix}-privacy-error`
                : undefined
            }
            onChange={(event) =>
              handleFieldChange(
                "privacyConsent",
                event.target.checked
              )
            }
            onBlur={() =>
              handleFieldBlur("privacyConsent")
            }
          />

          <span>
            I acknowledge that my information will
            be used to respond to my enquiry, as
            described in the{" "}

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>.
          </span>
        </label>

        {getError("privacyConsent") && (
          <span
            id={`${idPrefix}-privacy-error`}
            className="quote-form__field-error"
          >
            <AlertCircle size={15} aria-hidden="true" />
            {getError("privacyConsent")}
          </span>
        )}

        {/* =====================================
            FORM VALIDATION FEEDBACK
        ===================================== */}

        {submitAttempted && hasErrors && (
          <div
            className="quote-form__feedback quote-form__feedback--error"
            role="alert"
          >
            <AlertCircle
              size={21}
              aria-hidden="true"
            />

            <span>
              Please correct the highlighted fields
              before continuing.
            </span>
          </div>
        )}

        {isReady && !hasErrors && (
          <div
            className="quote-form__feedback quote-form__feedback--ready"
            role="status"
          >
            <CheckCircle2
              size={22}
              aria-hidden="true"
            />

            <div>
              <strong>
                Your form is complete!
              </strong>

              <p>
                Your details passed validation.
                Online submission will be enabled
                when our backend is connected.
                No request has been sent yet.
              </p>
            </div>
          </div>
        )}

        {/* =====================================
            REVIEW BUTTON

            Phase 2: Validate only.
            Phase 4: Actual API submission.
        ===================================== */}

        <button
          type="submit"
          className="btn btn--primary quote-form__submit"
        >
          Review Quote Request

          <ArrowRight
            size={21}
            strokeWidth={2.4}
            aria-hidden="true"
          />
        </button>

        <p className="quote-form__note">
          Form preview — checking your details
          does not submit a request to HoodClean.
        </p>

      </form>
    </div>
  );
}
