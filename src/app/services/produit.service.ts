import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[]; /*creation d'un tableau de produit */

  constructor() { 
    this.produits = [
      {idProduit :1, nomProduit : "PC asus" ,prixProduit : 450, dateCreation : new Date("01/14/2011")},
      {idProduit :2, nomProduit : "Imprimante Epson" ,prixProduit : 3000.600 , dateCreation : new Date("12/17/2010")},
      {idProduit :3, nomProduit : "Tablette lenovo" ,prixProduit : 900.600 , dateCreation : new Date("02/20/2020")}


    ];
  }
  listeProduits():Produit[]{ //il doit retourner la liste des produits 
    return this.produits;

  }
  
  ajouterProduit(prod: Produit){
    this.produits.push(prod);
  }
}
