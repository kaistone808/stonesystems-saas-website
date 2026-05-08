const SIX_MONTHS_IN_DAYS = 183;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

function addMonths(date: Date, months: number) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function getPolicyReviewInfo(lastUpdatedIsoDate: string) {
  const lastUpdated = new Date(lastUpdatedIsoDate);
  const now = new Date();
  const ageInDays = (now.getTime() - lastUpdated.getTime()) / MS_PER_DAY;
  const needsRefresh = ageInDays > SIX_MONTHS_IN_DAYS;
  const lastReviewed = needsRefresh ? now : lastUpdated;
  const nextReviewDue = addMonths(lastReviewed, 6);

  return {
    lastUpdated: dateFormatter.format(lastUpdated),
    lastReviewed: dateFormatter.format(lastReviewed),
    nextReviewDue: dateFormatter.format(nextReviewDue),
  };
}
