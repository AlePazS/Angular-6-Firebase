import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Product } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    
    productsCollection;
	products: Observable<Product[]>;
	productsDoc;

  constructor(public db: AngularFirestore) { 
   this.products= this.db.collection('products').valueChanges();
  }

  getProducts(){

  	return this.products;
  }
}
