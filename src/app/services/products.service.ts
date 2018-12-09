import { Injectable } from '@angular/core';
import { AngularFiretore} from '@angular/fire/firestore';
import { Product } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    
    productsCollection;
	products: ;
	productsDoc;

  constructor(db: AngularFiretore) { }
}
