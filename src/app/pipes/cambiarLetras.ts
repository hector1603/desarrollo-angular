import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cambiarLetras'
})

export class CambiaLetrasPipe implements PipeTransform {
    transform(value: string, mayus: boolean = false) {
        let resultado = value.replaceAll('e', '3')
                    .replaceAll('i', '1');
        if(mayus) {
            resultado = resultado.toUpperCase();
        }
        return resultado;
    }
}