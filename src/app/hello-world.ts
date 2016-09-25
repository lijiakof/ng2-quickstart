import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `
        <h1>Hello Angular2</h1>
    `
})

export class HelloWorld { 
    name: string;

    constructor(){
    }

}