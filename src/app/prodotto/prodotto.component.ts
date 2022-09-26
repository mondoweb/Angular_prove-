import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  /*
 prodotti = [
  { image: 'https://cdn.pixabay.com/photo/2015/12/15/03/56/macbook-1093641__340.jpg' , description: 'Mac Air1 M1 i7 32gb ram' , price: 780 , disponibile : true , quantita: 4 , } ,
  { image: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822__340.jpg' , description: 'PC Asus i7 16gb ram ' , price: 330 , disponibile : true , quantita: 10 , } ,
  { image: 'https://cdn.pixabay.com/photo/2014/05/05/19/53/keyboard-338505__340.jpg' , description: 'Fotocamera Sony pixma 8540' , price: 510 , disponibile : false , quantita: 0 ,  } ,
  { image: 'https://cdn.pixabay.com/photo/2017/05/19/14/09/ps4-2326616__340.jpg' , description: 'Play Station 4 plus' , price: 390 , disponibile : true , quantita: 7 , } ,
  { image: 'https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489__340.jpg' , description: 'Iphone 12 Pro' , price: 840 , disponibile : false , quantita: 0 , } ,
  { image: 'https://cdn.pixabay.com/photo/2013/09/22/09/15/tablet-184888__340.jpg' , description: 'Tablet Samsung' , price: 340 , disponibile : true , quantita: 28 , } ,
  { image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876__340.jpg' , description: 'TV Android 55 pollici  ' , price: 840 , disponibile : true , quantita: 3 , } ,
  { image: 'https://cdn.pixabay.com/photo/2017/11/18/00/10/xbox-2958864__340.jpg' , description: 'xBOX 360 v  Special ' , price: 440 , disponibile : false , quantita: 0 , } ,
 ];
 */

 mystile: object;

 prodotti : any;
    constructor( private servProdotto : ProdottiService) {

    this.mystile= { 'font-size' : '18px' , color : 'blue'}
  }

  ngOnInit(): void {

    this.prodotti = this.servProdotto.prodotti;

  }

}
