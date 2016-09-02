import { Component } from '@angular/core';

@Component({
    selector: "app",
    template: `<h1>sjoko {{this.banaan()}}</h1>`
})
export class AppComponent {
    banaan() : string {
        return "Banaan";
    }
}