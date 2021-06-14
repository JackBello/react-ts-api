import { IMapObject } from "../Types/@Interface/index";

export default class Factory {
    protected _map: IMapObject = this;
    protected _resource: any;

    constructor(data: object) {
        this._resource = data;

        this.formatResource()
    }

    protected formatResource() {
        this.mapGetters();

        const format: object = this.useFormat();

        this.deleteGetters();
        this.applyFormat(format);
    }

    protected mapGetters(): void {
        for (let key in this._resource) {
            this._map[key] = this._resource[key];
        }
    }

    protected deleteGetters(): void {
        const formatKeys = Object.keys(this.useFormat());
        const resourceKeys = Object.keys(this._resource);

        resourceKeys.forEach((key: string) => {
            if (formatKeys.includes(key)) return;
            delete this._map[key];
        });

        delete this._resource;
    }

    protected applyFormat(format: any): void {
        const formatKeys = Object.keys(format)

        formatKeys.forEach((key: string) => {
            this._map[key] = format[key];
        });
    }

    protected useFormat(): object {
        return {}
    }

    static collection(array: Array<any>, Constructor: any) {
        if (!(Array.isArray(array))) {
            const typeOf = typeof array;

            throw new Error(`Given data must be an Iterable: ${typeOf} given`);
        }

        return array.map((item) => new Constructor(item));
    }

    static create(object: object, Constructor: any) {
        return new Constructor(object);
    }
}