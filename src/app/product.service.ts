import {Injectable} from "@angular/core";
import {Product} from "./Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class ProductService {
  API: string = 'https://60f02c43f587af00179d3db4.mockapi.io/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API)
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.API}`, product);
  }

  updateProduct(product:Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }

  removeProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
}
