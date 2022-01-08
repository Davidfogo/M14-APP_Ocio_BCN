import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  Lugares:any = [];

  constructor(
    private alertCrtl: AlertController, public ApiserviceService: ApiserviceService
  ) {
    this.getAllLocations();
    
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
    this.Lugares = response;
   });
}
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
