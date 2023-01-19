import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAPIService } from '../product-api.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-create-prouct',
  templateUrl: './create-prouct.component.html',
  styleUrls: ['./create-prouct.component.css']
})
export class CreateProuctComponent {

  productForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: ProductAPIService
  ) { 
    this.productForm = this.formBuilder.group({
      ProductName: [''],
      CategoryId: [''],
      CategoryName: ['']
    })
  }

  ngOnInit() { }
 
  onSubmit(): any {
    //console.log(this.productForm);
    this.crudService.CreateProduct(this.productForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/product-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
