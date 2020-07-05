import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';
@Injectable()
export  class ProduitService{
  private PRODUITS: Produit[] = [];

  constructor() {
    let p1:Produit = new Produit("Produit1",1200,20) ;
    let p2:Produit = new Produit("Produit2",2300,800) ;
    let p3:Produit = new Produit("Produit3",600,120) ;


    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);

  }

  public getProduits() : Produit []{
    return this.PRODUITS;
  }


}
