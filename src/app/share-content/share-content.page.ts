import { Component, OnInit } from '@angular/core';
import * as vis from 'vis-network';
@Component({
  selector: 'app-share-content',
  templateUrl: './share-content.page.html',
  styleUrls: ['./share-content.page.scss'],
})
export class ShareContentPage implements OnInit {

  contenido:any = {};
  
  constructor() { }

  ngOnInit() {
    let graph:any = document.querySelector('#network');
    
    /**
     * 
     * scaling permite escalar los nodos conforme a su valor, 
     * 
     * un ejemplo se puede ver
     * 
     *  nodes = [
    { id: 1, value: 2, label: "Algie" },
    { id: 2, value: 31, label: "Alston" },
    { id: 3, value: 12, label: "Barney" },
    { id: 4, value: 16, label: "Coley" },
    { id: 5, value: 17, label: "Grant" },
    { id: 6, value: 15, label: "Langdon" },
    { id: 7, value: 6, label: "Lee" },
    { id: 8, value: 5, label: "Merlin" },
    { id: 9, value: 30, label: "Mick" },
    { id: 10, value: 18, label: "Tod" }
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    { from: 2, to: 8, value: 3 },
    { from: 2, to: 9, value: 5 },
    { from: 2, to: 10, value: 1 },
    { from: 4, to: 6, value: 8 },
    { from: 5, to: 7, value: 2 },
    { from: 4, to: 5, value: 1 },
    { from: 9, to: 10, value: 2 },
    { from: 2, to: 3, value: 6 },
    { from: 3, to: 9, value: 4 },
    { from: 5, to: 3, value: 1 },
    { from: 2, to: 7, value: 4 }
  ];
     * 
     * var options = {
    nodes: {
      shape: "dot",
      scaling: {
        customScalingFunction: function(min, max, total, value) {
          return value / total;
        },
        min: 5,
        max: 150
      }
    }
  };
     */
    
    this.contenido = {
      content:{
        nodes:[
          {
            id:'Productos',
            label:'Productos'
          },
          {
            id:'medical',
            label:`
              Medical-Negocio
            `,
            value:3
          },
          {
            id:'LSD',
            label:'LSD'
          },
          {
            id:'Onco',
            label:'Oncologia'
          },
          {
            id:'GY',
            label:'Gastro'
          },
          {
            id:'Hemato',
            label:'Hematología'
          },
          {
            id:'CMLR',
            label:'CMLR',
            value:'3'
          },
          {
            id:'app',
            label:'Tecnologías',
            
          },
          {
            id:'IT',
            label:'IT'
          },
          {
            id:'Vendors',
            label:'Vendors'
          }
        ],
        edges:[
          {
            from:"medical", to:"LSD", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"medical", to:"Onco", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"medical", to:"GY", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"medical", to:"Hemato", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"LSD", to:"Productos", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"Onco", to:"Productos", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"GY", to:"Productos", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"Hemato", to:"Productos", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"CMLR", to:"medical", arrows:{from:{enabled:true,type:"arrow"}}
          },
          {
            from:"app", to:"CMLR", arrows:{to:{enabled:true,type:"arrow"}}
          },
          {
            from:"IT", to:"app"
          },
          {
            from:"Vendors", to:"IT"
          }
        ]
      },
      options:{
        nodes:{
          shape:"dot"
        }
      }
    }
    var container = document.getElementById("mynetwork");
    new vis.Network(graph, this.contenido.content, this.contenido.options);
  }

}
