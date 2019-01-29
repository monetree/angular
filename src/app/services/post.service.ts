import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    
   }

   getPosts(){
    return this.http.get(this.url)
   }

   createPost(post){
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) 
          return Observable.throw(new BadInput(err));
        return Observable.throw(new AppError(err));
      })
    )
   }

   updatePost(post){
    return this.http.patch(this.url + '/' + post.id , JSON.stringify({ isRead: true }))
   }

   deletePost(id){
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404)
          return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(err));
      })
    )
    }
}
