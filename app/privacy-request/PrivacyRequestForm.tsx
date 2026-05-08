'use client';

import { FormEvent, useMemo, useState } from 'react';
import classes from './PrivacyRequestForm.module.css';

type RequestType =
  | 'Right to know/access'
  | 'Delete'
  | 'Correct'
  | 'Portability'
  | 'Opt-out of sale/sharing'
  | 'Limit use of sensitive PI'
  | 'Appeal denied request';

type ActingAs = 'Self' | 'Authorized agent';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  requestType: RequestType | '';
  additionalDetails: string;
  actingAs: ActingAs | '';
  verificationConfirmed: boolean;
};

const requestTypes: RequestType[] = [
  'Right to know/access',
  'Delete',
  'Correct',
  'Portability',
  'Opt-out of sale/sharing',
  'Limit use of sensitive PI',
  'Appeal denied request',
];

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
  phone: '',
  state: '',
  requestType: '',
  additionalDetails: '',
  actingAs: '',
  verificationConfirmed: false,
};

export function PrivacyRequestForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!values.firstName.trim()) nextErrors.firstName = 'First name is required';
    if (!values.lastName.trim()) nextErrors.lastName = 'Last name is required';
    if (!values.email.trim()) nextErrors.email = 'Email is required';
    if (values.email.trim() && !emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!values.state) nextErrors.state = 'State is required';
    if (!values.requestType) nextErrors.requestType = 'Select a request type';
    if (!values.actingAs) nextErrors.actingAs = 'Select who you are acting as';
    if (!values.verificationConfirmed) {
      nextErrors.verificationConfirmed = 'You must confirm before submitting';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError('');
    setSuccessMessage('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/privacy-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { success?: boolean; referenceId?: string; error?: string };

      if (!response.ok || !data.success) {
        setFormError(data.error || 'Unable to submit request. Please try again.');
        return;
      }

      setSuccessMessage(
        `Request submitted successfully. Your reference ID is ${data.referenceId}. We will acknowledge within 10 business days.`
      );
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setFormError('Something went wrong while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={classes.outer}>
      <div className={classes.container}>
        <h1 className={classes.title}>Your Privacy Rights</h1>
        <p className={classes.subtitle}>
          Submit a privacy request to access, correct, delete, or otherwise manage your personal data.
        </p>
        <form className={classes.card} onSubmit={handleSubmit} noValidate>
          {successMessage && (
            <p className={classes.successBanner} role="status" aria-live="polite">
              {successMessage}
            </p>
          )}
          {formError && (
            <p className={classes.errorBanner} role="alert">
              {formError}
            </p>
          )}

          <div className={classes.grid}>
            <div className={classes.field}>
              <label className={classes.label} htmlFor="firstName">
                First name *
              </label>
              <input
                id="firstName"
                className={classes.input}
                value={values.firstName}
                onChange={(e) => setValues((prev) => ({ ...prev, firstName: e.target.value }))}
                autoComplete="given-name"
                required
              />
              {errors.firstName && <span className={classes.error}>{errors.firstName}</span>}
            </div>

            <div className={classes.field}>
              <label className={classes.label} htmlFor="lastName">
                Last name *
              </label>
              <input
                id="lastName"
                className={classes.input}
                value={values.lastName}
                onChange={(e) => setValues((prev) => ({ ...prev, lastName: e.target.value }))}
                autoComplete="family-name"
                required
              />
              {errors.lastName && <span className={classes.error}>{errors.lastName}</span>}
            </div>

            <div className={classes.field}>
              <label className={classes.label} htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className={classes.input}
                value={values.email}
                onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                autoComplete="email"
                required
              />
              {errors.email && <span className={classes.error}>{errors.email}</span>}
            </div>

            <div className={classes.field}>
              <label className={classes.label} htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                className={classes.input}
                value={values.phone}
                onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))}
                autoComplete="tel"
              />
            </div>

            <div className={classes.full}>
              <label className={classes.label} htmlFor="state">
                State of residence *
              </label>
              <select
                id="state"
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
              {errors.state && <span className={classes.error}>{errors.state}</span>}
            </div>

            <fieldset className={classes.full}>
              <legend className={classes.label}>Request type *</legend>
              <div className={classes.radioGroup}>
                {requestTypes.map((requestType) => (
                  <label key={requestType} className={classes.radioOption}>
                    <input
                      className={classes.radioInput}
                      type="radio"
                      name="requestType"
                      value={requestType}
                      checked={values.requestType === requestType}
                      onChange={() => setValues((prev) => ({ ...prev, requestType }))}
                    />
                    {requestType}
                  </label>
                ))}
              </div>
              {errors.requestType && <span className={classes.error}>{errors.requestType}</span>}
            </fieldset>

            <div className={classes.full}>
              <label className={classes.label} htmlFor="additionalDetails">
                Additional details
              </label>
              <textarea
                id="additionalDetails"
                className={classes.textarea}
                value={values.additionalDetails}
                onChange={(e) => setValues((prev) => ({ ...prev, additionalDetails: e.target.value }))}
              />
            </div>

            <fieldset className={classes.full}>
              <legend className={classes.label}>Acting as *</legend>
              <div className={classes.radioGroup}>
                {(['Self', 'Authorized agent'] as ActingAs[]).map((actingAs) => (
                  <label key={actingAs} className={classes.radioOption}>
                    <input
                      className={classes.radioInput}
                      type="radio"
                      name="actingAs"
                      value={actingAs}
                      checked={values.actingAs === actingAs}
                      onChange={() => setValues((prev) => ({ ...prev, actingAs }))}
                    />
                    {actingAs}
                  </label>
                ))}
              </div>
              {errors.actingAs && <span className={classes.error}>{errors.actingAs}</span>}
            </fieldset>

            <div className={classes.full}>
              <label className={classes.checkboxOption}>
                <input
                  className={classes.checkboxInput}
                  type="checkbox"
                  checked={values.verificationConfirmed}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, verificationConfirmed: e.target.checked }))
                  }
                />
                I confirm the information is accurate and I am the consumer or authorized agent.
              </label>
              {errors.verificationConfirmed && (
                <span className={classes.error}>{errors.verificationConfirmed}</span>
              )}
            </div>
          </div>

          <div className={classes.actions}>
            <button className={classes.submit} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Privacy Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
