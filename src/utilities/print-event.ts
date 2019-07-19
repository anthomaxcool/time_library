import { HistoricalEvent } from '../model/event';

/**
 * Utility method to print out an event's fields in a pretty way. (WIP).
 * @param e The event to print.
 */
export function printEvent(e: HistoricalEvent): void {
    console.log(`Name: ${e.name}.`);
    console.log(`id: ${e.id}.`);
    if (e.childEvents) {
        console.log(`childEvents: [`);
        e.childEvents.forEach((event) => {
            printEvent(event);
        });
        console.log(`].`);
    }
    if (e.period) {
        console.log(`Period ID: ${e.period.id}`);
        if (e.period.start) {
            console.log(`Start Date: ${e.period.start.year}-${e.period.start.month}-${e.period.start.day}`);
        }
    }
}
