import { Component, OnInit } from '@angular/core';
import Evaluator from '../../../evaluator';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toOutput: Number;
  eval: Evaluator;

  compute(input: String){
    this.toOutput = this.eval.run(input);
  }

}
