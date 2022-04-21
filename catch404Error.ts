import { HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, OperatorFunction, throwError } from "rxjs";

export function catch404Error<T>(then: (err: HttpErrorResponse) => Observable<T>): OperatorFunction<any, T> {
	return catchError<any, Observable<T>>(err => {
		if (!(err instanceof HttpErrorResponse))
			return throwError(() => err);
		else if ((err as HttpErrorResponse).status !== 404)
			return throwError(() => err);
		else
			return then(err as HttpErrorResponse);
	});
}
