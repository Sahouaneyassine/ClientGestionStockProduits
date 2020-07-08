import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';
import {Produit} from '../shared/produit';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits:Produit[];
  produitForm:FormGroup;
  operation: string;
  selectedProduct: Produit;
  produitliflfield: Produit ;
  constructor(private produitService:ProduitService ,private fb:FormBuilder) {
    this.creatForm();

  }

  ngOnInit(): void {
    this.loadProduits();
    this.produitselectedinit();

  }
   loadProduits(){
    this.produitService.getProduits().subscribe(data=>{
      this.produits=data;
    },err=>{
      console.log(err);
    })
   }

  addProduct() {
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(data=>{
      this.loadProduits();

    },error => {
      console.log(error);
    })

  }



  deleteProduit(id: number) {
    this.produitService.deleteProduct(id).subscribe(data=>{
      this.produitselectedinit();
      this.loadProduits();
    }, error => {
      console.log(error);
    })

  }

  updateProduit() {

    this.produitliflfield=this.produitForm.value ;
    this.produitService.updateProduit(this.selectedProduct.id,this.produitliflfield).subscribe(data=>
    {
      this.produitselectedinit();
      this.loadProduits()
    }, error => {
      console.log(error);
    })


  }

   produitselectedinit() {
    this.selectedProduct=new Produit();
    this.creatForm();
  }

   creatForm() {
     this.produitForm=this.fb.group({
         ref:['',Validators.required],
         quantite : '',
         prixunitaire : ''
       }

     );

  }
}

