export interface TodayDate {
  day: number
  month: number
  year: number
  fullDate: string
}

export default {
  formatDate: (date: Date): string => {
    const locale = 'en-US';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },
  computeTodayDate(): TodayDate {
    const date = new Date();
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      fullDate: this.formatDate(date),
    };
  },
};
