import PocketBase from 'pocketbase';

export default class PB {

    static PB;

    static get() {

        if (this.PB === undefined) {
            this.PB = new PocketBase('https://stickman-api.lightin.io');
        }

        return this.PB;
    }
}