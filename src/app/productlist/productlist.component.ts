import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../product-api.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  Products:any = [];
 
  constructor(private crudService: ProductAPIService) { }
 
  ngOnInit(): void {
    this.GetAllProduct()  

  }

  delete(id:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteProduct(id).subscribe((res) => {
        this.GetAllProduct()
      })
  }
  }

  GetAllProduct()
  {
    this.crudService.GetProducts().subscribe((res : any) => {
      console.log(res)
      this.Products =res.data;
    });   
  }

}
