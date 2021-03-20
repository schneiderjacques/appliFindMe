import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  public connecte = false;
  public profils = [];
  public PseudoConnexion = '';
  constructor() {
    this.profils.push([[0],['HISLER'],['Ludivine'],['Responsable Marketing'],['Metz'],['VCI LUX'],['09/11/1987'],['img/ludivine.png']]);
    this.profils.push([[0],['HÊTRE'],['Jhon'],['Gestionnaire Patrimoine'],['Montpellier'],['ACCORD'],['01/02/2000'],['img/lauryn.png']]);
    this.profils.push([[0],['SAPRISTI'],['Speedy'],['Responsable thérapeutique'],['Nancy'],['TOUT FAIRE NANCY'],['04/12/2000'],['img/martin.png']]);
    this.profils.push([[0],['YANDEO'],['Zu'],['Gestion d\'entreprise'],['Nancy'],['TOUT'],['12/12/2000'],['img/guillaume.png']]);
    this.profils.push([[0],['MOULAH'],['Biffe'],['Responsable sécurité'],['Metz'],['Eurovia'],['25/09/2000'],['img/bruno.png']]);
    this.profils.push([[0],['HOLLY'],['Wood'],['Annecy'],['BurgerKing'],['11/11/2000'],['img/samuel.png']]);
  }
}
