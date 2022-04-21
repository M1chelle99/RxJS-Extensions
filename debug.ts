import { tap } from "rxjs";

export function debug(observableName: string = undefined) {
    return tap({
        next(value) {
            console.log(
                observableName
                    ? `%c[${observableName}: Next]`
                    : '%c[Next]'
                , "background: #009688; color: #fff; padding: 3px; font-size: 9px;"
                , value);
        },
        error(error) {
            console.log(
                observableName
                    ? `%c[${observableName}: Error]`
                    : '%c[Error]'
                , "background: #E91E63; color: #fff; padding: 3px; font-size: 9px;"
                , error);
        },
        complete() {
            console.log(
                observableName
                    ? `%c[${observableName}: Complete]`
                    : '%c[Complete]'
                , "background: #00BCD4; color: #fff; padding: 3px; font-size: 9px;");
        }
    });
}
