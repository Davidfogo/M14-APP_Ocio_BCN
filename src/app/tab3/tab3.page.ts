import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  imatge;
  Lugares:any = [];

  constructor(
    private alertCrtl: AlertController, public ApiserviceService: ApiserviceService
  ) {
    this.getAllLocations();
    
  }

  selectedFile(event, id){
    this.imatge = event.target.files[0];
    console.log(id);

    var data = new FormData();
    data.append('id', id);
    data.append('imatge', this.imatge);
    this.ApiserviceService.modificarImage(data).subscribe((response) => {
      console.log(response);
      });
  }

  modImage(){
    
  }

  getAllLocations(){
    this.ApiserviceService.getAllLocations().subscribe((response) => {
      this.Lugares = response;
     });

  }
  /*
    Lugares =  [{"nombre": "La Pau",
      "tipo_lugar": "Metro",
      "latitud": 43.31117,
      "longitud":-0.35583 
    },{"nombre": "Diagonal mar",
      "tipo_lugar": "Centro comercial",
      "latitud": 41.4052285,
      "longitud": 2.2133522
    },{"nombre": "Parada X",
      "tipo_lugar": "Lugar",
      "latitud": 2,
      "longitud": 0
    },{"nombre": "Museo Barcelona",
      "tipo_lugar": "Museo",
      "latitud": 223,
      "longitud": 2323
    },{"nombre": "Cine Barcelona",
    "tipo_lugar": "Cine",
    "latitud": 22343,
    "longitud": 1232323
  },{"nombre": "Parada",
  "tipo_lugar": "Metro",
  "latitud": 223,
  "longitud": 2323
  },{"nombre": "Parada",
  "tipo_lugar": "Metro",
  "latitud": 26523,
  "longitud": 2323
  },{"nombre": "Parada",
  "tipo_lugar": "Tren",
  "latitud": 22783,
  "longitud": 237823
  },{"nombre": "Parada",
  "tipo_lugar": "Metro",
  "latitud": 223,
  "longitud": 2323
  },{"nombre": "Parada",
  "tipo_lugar": "Tram",
  "latitud": 22423,
  "longitud": 2323
  },{"nombre": "Parada",
  "tipo_lugar": "Museo",
  "latitud": 223,
  "longitud": 2323
  },{"nombre": "Parada",
  "tipo_lugar": "Metro",
  "latitud": 25623,
  "longitud": 238723
  }];
  */
  delete(borrar){
    let data = {
      idLoc: borrar
    }
    this.ApiserviceService.deleteLugar(data).subscribe((response) => {
      this.getAllLocations();
      });
  }


  //MODIFICAR
  async showModificar(sw){
    await this.alertCrtl.create({
      header:"¿Hi ha alguna cosa que estigui malament?",
      subHeader:"¡Modificala sense cap problema!",
     
      inputs:[
        {type: "text", name: "lloc", placeholder: "Lloc", value: sw.sitio},
        {type: "text", name: "tipus", placeholder: "Tipus de lloc", value: sw.tiposSitio},
        {type: "text", name: "latitud", placeholder: "Latitud", value: sw.latitud},
        {type: "text", name: "longitud", placeholder: "Longitud", value: sw.longitud}
      ],
      buttons:[{
        text:"modificar", handler:(res) =>{

          let data = {
            id: sw.idLoc,
            lloc: res.lloc,
            tipus: res.tipus,
            lat: res.latitud,
            long: res.longitud
          }

          console.log(data);
          this.ApiserviceService.modificarLocation(data).subscribe((response) => {
            console.log(response);
            });
            this.getAllLocations();
      
          console.log(res.lloc);
          console.log(res.tipus);
          console.log(res.latitud);
          console.log(res.longitud);
        }
      },
      {
        text: "Cancelar"
      }
      ]
    }).then(res => res.present());
  }


  //AÑADIR
  async showAlert(){
    await this.alertCrtl.create({
      header:"Fica tot el que vulguis!",
      subHeader:"Aixi ho pots trobar!",
      message:"completa els camps seguents",
      inputs:[
        {type: "text", name: "lloc", placeholder: "Lloc"},
        {type: "text", name: "tipus", placeholder: "Tipus de lloc"},
        {type: "text", name: "latitud", placeholder: "Latitud"},
        {type: "text", name: "longitud", placeholder: "Longitud"}
      ],
      buttons:[{
        text:"añadir", handler:(res) =>{

          let data = {
            lloc: res.lloc,
            tipus: res.tipus,
            lat: res.latitud,
            long: res.longitud
            
          }

          this.ApiserviceService.addLocation(data).subscribe((response) => {
            console.log(response);
            });
            this.getAllLocations();
      
          console.log(res.lloc);
          console.log(res.tipus);
          console.log(res.latitud);
          console.log(res.longitud);
        }
      },
      {
        text: "Cancelar"
      }
      ]
    }).then(res => res.present());
  }
}
