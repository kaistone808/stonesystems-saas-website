'use client';

import { FormEvent, useMemo, useState } from 'react';
import classes from './DoNotSellPage.module.css';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  state: string;
};

const usStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  state: '',
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function DoNotSellPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quickOptOutDone, setQuickOptOutDone] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const gpcEnabled = typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true;
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  function handleQuickOptOut() {
    const payload = {
      version: 1,
      timestamp: new Date().toISOString(),
      categories: {
        essential: true,
        analytics: false,
        advertising: false,
      },
    };

    window.localStorage.setItem('stonesystems_consent', JSON.stringify(payload));
    window.localStorage.setItem('stone_consent_v1', JSON.stringify(payload));

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      });
    }

    window.dispatchEvent(
      new CustomEvent('stoneconsent:change', {
        detail: payload,
      })
    );

    setQuickOptOutDone(true);
    setQuickMessage('Success. Advertising and analytics tracking are now disabled on this device.');
  }

  function validateForm() {
    const nextErrors: Record<string, string> = {};
    if (!values.firstName.trim()) nextErrors.firstName = 'First name is required';
    if (!values.lastName.trim()) nextErrors.lastName = 'Last name is required';
    if (!values.email.trim()) nextErrors.email = 'Email is required';
    if (values.email && !emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!values.state) nextErrors.state = 'State is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/privacy-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          state: values.state,
          requestType: 'opt-out',
          actingAs: 'self',
          verify: 'on',
          additionalDetails:
            'Submitted from Do Not Sell or Share My Personal Information account-level opt-out form.',
        }),
      });

      const data = (await response.json()) as { success?: boolean; referenceId?: string; error?: string };
      if (!response.ok || !data.success) {
        setFormError(data.error || 'Unable to submit request right now. Please try again.');
        return;
      }

      setFormSuccess(
        `Request received. Your reference ID is ${data.referenceId}. We will acknowledge your request within 10 business days.`
      );
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setFormError('Unable to submit request right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={classes.outer}>
      <div className={classes.container}>
        <h1 className={classes.title}>Do Not Sell or Share My Personal Information</h1>
        <p className={classes.subtitle}>
          Use the quick device-level opt-out below, or submit an account-level privacy request.
        </p>

        {gpcEnabled && (
          <p className={classes.gpcBanner} role="status">
            GPC detected, you&apos;re already opted out on this device.
          </p>
        )}

        <section className={classes.section} aria-labelledby="quick-opt-out-title">
          <h2 id="quick-opt-out-title">Quick opt-out (this device)</h2>
          <p>
            This updates tracking preferences on your current browser and device. It disables
            advertising and analytics cookies.
          </p>
          <button
            type="button"
            className={classes.button}
            onClick={handleQuickOptOut}
            disabled={quickOptOutDone || gpcEnabled}
          >
            Opt out on this device
          </button>
          {quickMessage && (
            <p className={classes.success} role="status">
              {quickMessage}
            </p>
          )}
        </section>

        <section className={classes.section} aria-labelledby="account-opt-out-title">
          <h2 id="account-opt-out-title">Account-level opt-out</h2>
          <p>
            Submit this request if you want us to process an account-level opt-out for your personal
            information.
          </p>

          {formSuccess && (
            <p className={classes.success} role="status">
              {formSuccess}
            </p>
          )}
          {formError && (
            <p className={classes.error} role="alert">
              {formError}
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className={classes.grid}>
              <div className={classes.field}>
                <label className={classes.label} htmlFor="dns-firstName">
                  First name *
                </label>
                <input
                  id="dns-firstName"
                  className={classes.input}
                  value={values.firstName}
                  onChange={(e) => setValues((prev) => ({ ...prev, firstName: e.target.value }))}
                  required
                />
                {errors.firstName && <span className={classes.fieldError}>{errors.firstName}</span>}
              </div>

              <div className={classes.field}>
                <label className={classes.label} htmlFor="dns-lastName">
                  Last name *
                </label>
                <input
                  id="dns-lastName"
                  className={classes.input}
                  value={values.lastName}
                  onChange={(e) => setValues((prev) => ({ ...prev, lastName: e.target.value }))}
                  required
                />
                {errors.lastName && <span className={classes.fieldError}>{errors.lastName}</span>}
              </div>

              <div className={classes.field}>
                <label className={classes.label} htmlFor="dns-email">
                  Email *
                </label>
                <input
                  id="dns-email"
                  type="email"
                  className={classes.input}
                  value={values.email}
                  onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
                {errors.email && <span className={classes.fieldError}>{errors.email}</span>}
              </div>

              <div className={classes.field}>
                <label className={classes.label} htmlFor="dns-state">
                  State of residence *
                </label>
                <select
                  id="dns-state"
                  className={classes.select}
                  value={values.state}
                  onChange={(e) => setValues((prev) => ({ ...prev, state: e.target.value }))}
                  required
                >
                  <option value="">Select a state</option>
                  {usStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <span className={classes.fieldError}>{errors.state}</span>}
              </div>

              <div className={classes.full}>
                <button type="submit" className={classes.button} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit account-level opt-out'}
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
