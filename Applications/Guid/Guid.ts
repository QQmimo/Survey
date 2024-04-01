export class Guid {
    public static new(): string {
        const mask: string = 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx';
        const symbols: string = '0123456789ABCDEF';
        return mask.replace(/x/g, c => symbols.charAt(Math.random() * symbols.length));
    }

    public static readonly Empty = '00000000-0000-0000-0000-000000000000';
}