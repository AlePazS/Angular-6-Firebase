import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

	products =[];
  editingProduct: products;
  editing:  boolean=false;
  constructor( public productsService: ProductsService ) { }

  ngOnInit() {

  	this.productsService.getProducts().subscribe(products=>{
  		this.products=products;
  	});
  }
  

  deleteProduct(event,product){
  	this.productsService.deleteProduct(product);
  }
   

   editProduct(event,product){
      //console.log(product);
      this.editingProduct=product;
      this.editing=!this.editing;

   }

   updateProduct(){
      //console.log(this.editingProduct);
      this.productsService.updateProduct(this.editingProduct);
      this.editingProduct={} as Product;
      this.editing=false;
   }

}
