import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAPIService } from '../product-api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  ProductId : any
  Product : any ={}
  productForm: FormGroup;
  
 
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: ProductAPIService
  ) { 
    this.ProductId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productForm = this.formBuilder.group({
      ProductName: [''],
      CategoryId: [''],
      CategoryName: ['']
    })
  }
  ngOnInit() {
    this.getProduct()
   }

  getProduct()
  {
    this.crudService.GetProduct(this.ProductId).subscribe((res : any) => {
      console.log(res)
      this.Product =res.data;
      this.productForm.setValue({
        ProductName: res.data['ProductName'],
      CategoryId: res.data['CategoryId'],
      CategoryName: res.data['CategoryName']
    });
  });
}

  onSubmit(): any {
    //console.log(this.productForm);
    let newValue = this.productForm.value
    newValue.ProductId = this.ProductId
    this.crudService.UpdateProduct(newValue)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/product-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
