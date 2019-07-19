import { Group } from './group';
import { TimePeriod } from './time-period';

/**
 * Holds data for a person in history.
 */
export interface Person {

    /**
     * This person's full name.
     * (Potentially, we could split this into first and last name...)
     */
    name: string;
    /**
     * A unique identifier for this person, used by other objects to reference it.
     */
    id: string;
    /**
     * A list of events this person would have participated in.
     */
    events?: string[];

    /**
     * A list of `Relative` objects used to point to
     * other people objects that this one might be related to.
     */
    relatives?: Relative[];

    /**
     * Groups this person belongs to, if any.
     */
    groups?: Group[];

    /**
     * The life of this person as a `TimePeriod`.
     */
    life?: TimePeriod;
}

export interface Relative {
    id: string;
    relation: Relation;
}

export enum Relation {
    Family,
    Friend,
}
