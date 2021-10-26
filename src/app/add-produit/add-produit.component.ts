import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit(); /* en faite c'est une instance cette attribut contient des objets vide on le remplire par le formulaire   */
  message :any ;

  constructor(private produitService : ProduitService) { }
  ngOnInit(): void {
  }

  addProduit(){
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit)
    this.message = "Produit " + this.newProduit.nomProduit + " ajouter avec succes !";
  }


}
