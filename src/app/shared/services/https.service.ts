import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '@env/environment';
// import { JwtService } from '@auth/jwt.service';
// import { AuthService } from '../../auth/auth.service';
import { isUndefined } from 'util';


@Injectable()
export class HttpsClient {

    // constructor(private https: HttpClient, private auth: AuthService) { }
    constructor(private https: HttpClient) { }

    get<T>(path: string): Observable<T> {
        return <Observable<T>>this.https.get(`${environment.apiendpoint}/${path}/`, { headers: this.getHeaders() })
            .catch(this.formatErrors);
    }

    post<T>(path: string, payload: any = {}): Observable<T> {
        // payload.Authorizer = this.auth.userHash;
        // console.log('payload', `${environment.apiendpoint}/${path}`, payload);
        return <Observable<T>>this.https.post(`${environment.apiendpoint}/${path}`, payload, { headers: this.getHeaders() })
            .catch((e: any) => this.formatErrors(e));
    }

    private formatErrors(error: any) {
        console.log('error occured!', error);
        return Observable.throw(error);
    }

    private getHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        // const jwt = this.auth.idToken;
        // console.log('json web token ', jwt);
        // if (!isUndefined(jwt)) {
        //     headersConfig['Authorization'] = this.auth.idToken;
        // }
        // const jwt = this.jwtService.getToken();
        // if (jwt) { headersConfig['Authorization'] = `Bearer ${jwt}`; }

        return new HttpHeaders(headersConfig);
    }

}
