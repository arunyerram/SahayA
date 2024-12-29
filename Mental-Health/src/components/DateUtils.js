export function formatDateTime(dateTimeStr) {
    return new Date(dateTimeStr).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  }
  