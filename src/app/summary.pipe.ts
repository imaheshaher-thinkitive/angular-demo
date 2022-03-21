import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummayPipe implements PipeTransform {
    transform(value: any, limit?: any,another?:any) {
        if(!value)return null

        let actualLimit = (limit)? limit : 50;
        console.log(another)
        return another=="true" ?  value.substr(0,actualLimit).toUpperCase() + "...":null
    }
}