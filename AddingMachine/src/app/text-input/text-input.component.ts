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

 // toOutput: Number;
  output: String = ""; 
  eval: Evaluator;

  compute(inputValue: String){
    let toOutput = this.eval.run(inputValue);
    this.output+="> "+inputValue+"/n";
    this.output+=">> "+toOutput+"/n/n";
  }
}
