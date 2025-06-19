export const testGroups = {
  smoke: true,
  regression: true,
  sanity: false,
};

export function isGroupEnabled(group: keyof typeof testGroups) {
  return testGroups[group];
} 