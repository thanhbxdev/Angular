import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API:string='https://60f02c43f587af00179d3db4.mockapi.io/category'
  constructor(
    private http:HttpClient
  ) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.API)
  }
  getCategory(id:number):Observable<Category>{
    return this.http.get<Category>(`${this.API}/${id}`)
  }
  removeCategory(id:number):Observable<Category>{
    return this.http.delete<Category>(`${this.API}/${id}`)
  }
}
