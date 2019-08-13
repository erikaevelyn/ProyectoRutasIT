import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  id = "";
  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {
  }

}
