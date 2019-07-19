/**
 * A `TimePeriod` can be used to represent either a single date or some length of time.
 */
export interface TimePeriod {
    name?: string;
    id: string;
    start?: HistoricalDate;
    end?: HistoricalDate;
}

/**
 * A simple `Date`-like object that can be extended to work with dates B.C.E.,
 * named dates, or any other date-types we can think of.
 */
export interface HistoricalDate {
    year: number;
    month?: number;
    day?: number;
    time?: HistoricalTime;
}

/**
 * A simple interface used to keep track of hours, minutes, and seconds.
 * `hours` is the only required field, if a time is required.
 */
export interface HistoricalTime {
    hours: number;
    minutes?: number;
    seconds?: number;
}
