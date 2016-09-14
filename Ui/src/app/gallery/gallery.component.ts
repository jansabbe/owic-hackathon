import { Component, Input } from '@angular/core';
import {IPet} from '../../shared/PetService';

@Component({
    selector: "gallery",
    template: require<string>('./gallery.component.html'),
})
export class GalleryComponent  {
    @Input() pets: IPet[];

}