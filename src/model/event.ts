import { Person } from './person';
import { TimePeriod } from './time-period';

/**
 * This can be used to contain details of some event in the system, including its name
 * and when it took place, as well as the people involved.
 */
export interface HistoricalEvent {
    name: string;
    id: string;
    childEvents?: HistoricalEvent[];
    people?: Person[];
    period?: TimePeriod;
}
