import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({ name: 'openHours' })

export class HoursPipe implements PipeTransform {
    transform(value: string): string {
        let first = value.substr(0,2);
        let second = value.substr(2,4);
        
        return first + ':' + second;
    }    
}