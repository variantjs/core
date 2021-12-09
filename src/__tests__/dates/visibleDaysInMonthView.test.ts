import { WeekDay } from '../../types/Dates'
import visibleDaysInMonthView from '../../dates/visibleDaysInMonthView'

describe('visibleDaysInMonthView', () => {
  it('returns 42 items by adding the days on the next month and the prev month', () => {
    // 2021-10-23
    const date = new Date(2021, 9, 23)

    expect(visibleDaysInMonthView(date, WeekDay.Sunday).length).toBe(42)
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[0]).toEqual(new Date(2021, 8, 26))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[4]).toEqual(new Date(2021, 8, 30))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[5]).toEqual(new Date(2021, 9, 1))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[35]).toEqual(new Date(2021, 9, 31))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[36]).toEqual(new Date(2021, 10, 1))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[41]).toEqual(new Date(2021, 10, 6))
  })

  it('uses monday as default start of week', () => {
    // 2021-10-23
    const date = new Date(2021, 9, 23)

    expect(visibleDaysInMonthView(date).length).toBe(42)
    expect(visibleDaysInMonthView(date)[0]).toEqual(new Date(2021, 8, 26))
    expect(visibleDaysInMonthView(date)[41]).toEqual(new Date(2021, 10, 6))
  })

  it('returns 35 items by adding the days on the next month and the prev month using a custom start of week', () => {
    // 2021-10-23
    const date = new Date(2021, 9, 23)

    expect(visibleDaysInMonthView(date, WeekDay.Tuesday).length).toBe(35)
    expect(visibleDaysInMonthView(date, WeekDay.Tuesday)[0]).toEqual(new Date(2021, 8, 28))
    expect(visibleDaysInMonthView(date, WeekDay.Tuesday)[6]).toEqual(new Date(2021, 9, 4))
    expect(visibleDaysInMonthView(date, WeekDay.Tuesday)[34]).toEqual(new Date(2021, 10, 1))
  })

  it('returns 42 items by adding the days on the next month and the prev month using a custom start of week', () => {
    // 2021-10-23
    const date = new Date(2021, 9, 23)

    expect(visibleDaysInMonthView(date, WeekDay.Saturday).length).toBe(42)
    expect(visibleDaysInMonthView(date, WeekDay.Saturday)[0]).toEqual(new Date(2021, 8, 25))
    expect(visibleDaysInMonthView(date, WeekDay.Saturday)[41]).toEqual(new Date(2021, 10, 5))
  })

  it('returns 35 items when month ends on last day of week', () => {
    // 2021-07-23
    const date = new Date(2021, 6, 23)

    expect(visibleDaysInMonthView(date, WeekDay.Sunday).length).toBe(35)
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[0]).toEqual(new Date(2021, 5, 27))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[4]).toEqual(new Date(2021, 6, 1))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[34]).toEqual(new Date(2021, 6, 31))
  })

  it('returns 35 items when month start on first day of week', () => {
    // 2020-11-23
    const date = new Date(2020, 10, 23)

    expect(visibleDaysInMonthView(date, WeekDay.Sunday).length).toBe(35)
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[0]).toEqual(new Date(2020, 10, 1))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[29]).toEqual(new Date(2020, 10, 30))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[34]).toEqual(new Date(2020, 11, 5))
  })

  it('get four rows for a month with 28 days that start on sunday', () => {
    // 2015-02-15
    const date = new Date(2015, 1, 15)

    expect(visibleDaysInMonthView(date, WeekDay.Sunday).length).toBe(28)
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[0]).toEqual(new Date(2015, 1, 1))
    expect(visibleDaysInMonthView(date, WeekDay.Sunday)[27]).toEqual(new Date(2015, 1, 28))
  })

  it('get four rows for a month with 28 days and first day matches a custom day of week', () => {
    const date = new Date(2021, 1, 15)

    expect(visibleDaysInMonthView(date, WeekDay.Monday).length).toBe(28)
    expect(visibleDaysInMonthView(date, WeekDay.Monday)[0]).toEqual(new Date(2021, 1, 1))
    expect(visibleDaysInMonthView(date, WeekDay.Monday)[27]).toEqual(new Date(2021, 1, 28))
  })
})
