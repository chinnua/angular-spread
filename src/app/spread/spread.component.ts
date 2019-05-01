import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {

  spreadProps: any;
  columns: any;
  rows: any;

  constructor() { }

  ngOnInit() {
    this.spreadProps = {
      columnCount: 10,
      rowCount: 10
    };

    this.columns = Array.from(Array(this.spreadProps.columnCount)).map((x, i) => i);
    this.rows = Array.from(Array(this.spreadProps.rowCount)).map((x, i) => i);
  }

  convertToNumberingScheme(number) {
    var baseChar = ("A").charCodeAt(0),
      letters = "";

    do {
      number -= 1;
      letters = String.fromCharCode(baseChar + (number % 26)) + letters;
      number = (number / 26) >> 0; // quick `floor`
    } while (number > 0);

    return letters;
  }
}