import { Injectable } from '@angular/core';

@Injectable()
export class FetchDataAPIService {
    public data = [];
    constructor() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => this.data.push( data ))
            .catch(err => console.log(err));
            console.log(this.data);
    }
} 
