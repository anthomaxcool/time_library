import { Person } from './person';

/**
 * WIP: A `Group` can hold many people, and should have a name.
 */
export interface Group {
    name: string;
    id: string;
    people?: Person[];
}
