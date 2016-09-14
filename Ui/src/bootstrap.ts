import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GalleryComponent} from './app/gallery/gallery.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, GalleryComponent],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule)