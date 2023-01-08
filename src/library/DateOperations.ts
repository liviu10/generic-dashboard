import { Ref, ref } from 'vue';

enum DateType {
  'en-US',
  'ro-RO',
}

enum DateOption {
  'full_date_and_time',
  'only_date',
}

function DateFormat(
  date: string,
  localDate: string,
  localDateOption: string
): string {
  if (typeof date === 'string') {
    if (
      typeof localDate === 'string' &&
      Object.values(DateType).includes(localDate) &&
      Object.values(DateOption).includes(localDateOption)
    ) {
      const dateOptions: Ref<{
        day: 'numeric' | '2-digit' | undefined;
        month: 'numeric' | '2-digit' | undefined;
        year: 'numeric' | '2-digit' | undefined;
        hour: 'numeric' | '2-digit' | undefined;
        minute: 'numeric' | '2-digit' | undefined;
      }> = ref({
        day: undefined,
        month: undefined,
        year: undefined,
        hour: undefined,
        minute: undefined,
      });
      if (localDateOption === 'full_date_and_time') {
        dateOptions.value = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        };
      } else if (localDateOption === 'only_date') {
        dateOptions.value = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          hour: undefined,
          minute: undefined,
        };
      }
      return new Date(date).toLocaleDateString(localDate, dateOptions.value);
    } else {
      console.log(
        'You did not specify the local date or local date options! The default date format will be used!'
      );
      const defaultLocaleDate = 'en-US';
      return new Date(date).toLocaleDateString(defaultLocaleDate, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    }
  } else {
    return '—';
  }
}

function DateNumber(date: string): number | string {
  if (typeof date === 'string') {
    return new Date(date).getDate();
  } else {
    return '—';
  }
}

function DateFullYear(date: string): number | string {
  if (typeof date === 'string') {
    return new Date(date).getFullYear();
  } else {
    return '—';
  }
}

function DateMonthNumber(date: string): number | string {
  if (typeof date === 'string') {
    return new Date(date).getMonth();
  } else {
    return '—';
  }
}

export { DateFormat, DateNumber, DateFullYear, DateMonthNumber };
