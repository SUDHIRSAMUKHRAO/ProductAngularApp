import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  REST_API: string = 'http://localhost:3001';
  constructor(private httpclient :HttpClient) {
    
  }
  // Get all Product
	GetProducts() {
		return this.httpclient.get(`${this.REST_API}/ProductInfo` );
	  }

  // Delete
  deleteProduct(id:any) {
    return this.httpclient.delete(`${this.REST_API}/ProductInfo/${id}` );
  }

  //create

	CreateProduct(data:any) {

		return this.httpclient.post(`${this.REST_API}/ProductInfo`,data );
	 }

   // Get BY ID
  GetProduct(id:any) {
    return this.httpclient.get(`${this.REST_API}/ProductInfo/${id}` );
  }

  //update

	UpdateProduct(data:any) {

		return this.httpclient.put(`${this.REST_API}/ProductInfo`,data );
	 }

}
