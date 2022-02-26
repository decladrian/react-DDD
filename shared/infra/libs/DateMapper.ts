type DateFormat = 'DD-MM-YYYY' | 'YYYY-MM-DD' | 'YYYY-MM' | 'MM-YYYY';

const mockStringDate = '2022-20-20';

export class DateMapper {
  nativeDateToStringFormat(
    date: Date,
    format: DateFormat = 'DD-MM-YYYY'
  ): string {
    return mockStringDate;
  }

  stringFormatToNativeDate(
    date: string,
    format: DateFormat = 'DD-MM-YYYY'
  ): Date {
    return new Date();
  }
}
