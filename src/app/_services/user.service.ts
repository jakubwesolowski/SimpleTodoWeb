﻿import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '@app/_models';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {
    }

    register(user: User) {
        return this.http.post(`http://localhost:8080/register`, user);
    }

    setDaily(): Observable<boolean> {
        return this.http.get('http://localhost:8080/email/send/setDaily').pipe(tap((daily: boolean) => console.log(daily)));
    }

    removeDaily(): Observable<boolean> {
        return this.http.get('http://localhost:8080/email/send/removeDaily').pipe(tap((daily: boolean) => console.log(daily)));
    }

    getDaily(): Observable<boolean> {
        return this.http.get('http://localhost:8080/email/send/getDaily').pipe(tap((daily: boolean) => console.log(daily)));
    }
}
