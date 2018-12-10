import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

	products =[];

  constructor( public productsService: ProductsService ) { }

  ngOnInit() {

  	this.productsService.getProducts().subscribe(products=>{
  		this.products=products;
  	});
  }
  

  deleteProduct(event,product){
  	this.productsService.deleteProduct(product);
  }


}
