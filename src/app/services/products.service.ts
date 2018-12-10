import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Product } from '../models/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    
    productsCollection:AngularFirestoreCollection<Product>;
	products: Observable<Product[]>;
	productDoc:AngularFirestoreDocument<Product>;

  constructor(public db: AngularFirestore) { 
   //this.products= this.db.collection('products').valueChanges();

   this.productsCollection=this.db.collection('products');
   this.products=this.productsCollection.snapshotChanges().pipe(map(actions
    =>{
    return actions.map(a =>{
      const data= a.payload.doc.data() as Product;
      data.id=a.payload.doc.id;
      return data;
    });
   }));
  }

  getProducts(){

  	return this.products;
  }

  deleteProduct(product: Product){
      this.productDoc=this.db.doc(`products/${product.id}`);
      this.productDoc.delete();
  }
}
