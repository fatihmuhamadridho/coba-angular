import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tambah-product',
  templateUrl: './tambah-product.component.html',
  styleUrls: ['./tambah-product.component.scss'],
})
export class TambahProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logger(event: any) {
    console.log(event.target.value);
  }
}
