import { Component } from '@angular/core';

@Component({
    selector: "app",
    template: require<string>('./app.component.html'),
    styleUrls: ["/assets/main.css"]
})
export class AppComponent {
    banaan : string = "Banaan";
}