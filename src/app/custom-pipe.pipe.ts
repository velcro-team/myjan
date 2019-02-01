import { Pipe, PipeTransform } from '@angular/core';
// decorator 
@Pipe({
  name: 'even'
})
export class CustomPipePipe implements PipeTransform {

  transform(nums: number[]) {
    return nums.filter(num => num%2==0);
  }

}
