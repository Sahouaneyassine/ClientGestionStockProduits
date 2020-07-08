import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from '../config/apiurl.config';

@Injectable()
export  class ProduitService{



  constructor( private http:HttpClient) {


  }
  getProduits() : Observable<any>{
    return this.http.get(API_URLS.PRODUITS_URL) ;

  }


  addProduit(p: Produit) :Observable<any> {
    return this.http.post(API_URLS.PRODUITS_URL,p) ;


  }

  deleteProduct(id: number) :Observable<any> {
    return this.http.delete(API_URLS.PRODUITS_URL+"/"+id);

  }

  updateProduit(id: number, p : Produit) :Observable<any> {
    return this.http.put(API_URLS.PRODUITS_URL+"/"+id,p);

  }
}
