/**
 * Used to generate random IDs for referencing objects (HistoricalEvents, People, etc.)
 * @param length The length of the random ID
 */
export function generateId(length: number = 10): string {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
