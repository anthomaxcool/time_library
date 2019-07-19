import { HistoricalEvent } from './model/event';
import { generateId } from './utilities/generate-id';
import { printEvent } from './utilities/print-event';

main();

// We can do setup here.
function main(): void {
    const myEvent: HistoricalEvent = {
        id: generateId(),
        name: 'D-Day',
        period: {
            id: generateId(),
            start: {
                year: 1944,
                month: 6,
                day: 6,
            },
        },
    };
    printEvent(myEvent);
}
