import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  title: string = 'Lalalala';

  inputText: string = '';
  color: string = '';

  constructor() {}

  ngOnInit(): void {
    this.color = '#FF0000';
  }

  changeColor() {
    console.log('inputText', this.inputText);
    this.color = this.inputText;
  }
}
