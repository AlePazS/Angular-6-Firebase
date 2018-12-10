import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

	product={} as Product;

  constructor(public productService : ProductsService) { }

  ngOnInit() {
  }

  addProduct(){
  	if(this.product.name !=='' && this.product.description!=='' && this.product.description!==0){
  	  this.productService.addProduct(this.product);	
  	  this.product= {} as Product;
  	}
  	
  }

}
