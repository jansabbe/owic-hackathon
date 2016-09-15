import { Component, OnInit } from '@angular/core';
import {IPet, PetService, PetKind} from '../shared/PetService';
import {PetFiltering} from './petFilter/petFilter.component';
import * as _ from 'lodash';

@Component({
    selector: "app",
    template: require<string>('./app.component.html'),
    providers: [PetService]

})
export class AppComponent implements OnInit {
    pets: IPet[];
    petsDisplayList: IPet[];
    petFiltering: PetFiltering = new PetFiltering();
    
    constructor(private petService: PetService) {
    }

    ngOnInit() {
        this.petService.getPets().subscribe(result => {
            this.pets = result
            this.updateFiltering(this.petFiltering);
        });
    }

    updateFiltering(petFiltering : PetFiltering) {
        this.petFiltering = petFiltering;
        this.petsDisplayList = this.pets.filter(pet => this.petFiltering.isMatch(pet));
    }

}