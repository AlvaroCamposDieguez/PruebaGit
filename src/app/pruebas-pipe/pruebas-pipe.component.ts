import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { of } from "rxjs";
@Component({
  selector: 'app-pruebas-pipe',
  templateUrl: './pruebas-pipe.component.html',
  styleUrls: ['./pruebas-pipe.component.scss']
})
export class PruebasPipeComponent implements OnInit {

  nums = of(1, 2, 3);

  squareValues = map((val: number) => val * val);
  squaredNums = this.squareValues(this.nums);

  simpleIterator = (data: string | any[]) => {
    let cursor = 0;
    return {
      next: () => (cursor < data.length ? data[cursor++] : false)
    };
  };
  
  constructor() { }

  ngOnInit(): void {
    this.squaredNums.subscribe(x => console.log(x));
    var consumer = this.simpleIterator(["simple", "data", "iterator"]);
    console.log(consumer.next()); // 'simple'
    console.log(consumer.next()); // 'data'
    console.log(consumer.next()); // 'iterator'
    console.log(consumer.next()); // false
    
  }
 
}
