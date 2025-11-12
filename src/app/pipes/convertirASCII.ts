import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertirASCII'
})

export class ConvertirASCII implements PipeTransform {
    transform(value: string) {
        let result = '';
        for(let i = 0; i < value.length; i++) {
            result += value.charCodeAt(i); 
        }
        return result;
    }
}