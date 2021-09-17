import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://api-jsa.herokuapp.com/users';


  constructor(private snakbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError:Boolean=false):void{
    this.snakbar.open(msg, 'X', {
      duration: 3000,
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  createUser(user : User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: any): Observable<User>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(user: User): Observable<User>{
    const url = `${this.baseUrl}/${user.id}`
    return this.http.put<User>(url, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  delete(id: any): Observable<User>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<User>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }


}
