import { Component, Output, EventEmitter } from '@angular/core';
import {IPet, PetKind} from '../../shared/PetService';
import * as _ from 'lodash';

export class PetFiltering {
    searchString: string;
    kindFilter: PetKind | "" = "";

    isMatch(pet : IPet) : boolean {
        const fullPetText = _.values(pet).join(" ").toLocaleLowerCase();
        const isKindMatch = !this.kindFilter || pet.kind === this.kindFilter;
        const isSearchMatch = !this.searchString || fullPetText.includes(this.searchString.toLocaleLowerCase()) 
        return isKindMatch && isSearchMatch;
    }
}

@Component({
    selector: "pet-filter",
    template: require<string>('./petFilter.component.html')
})
export class PetFilterComponent {
    petFiltering : PetFiltering = new PetFiltering()
    @Output() petFilteringChanged = new EventEmitter<PetFiltering>()
    
    updateFiltering() {
        this.petFilteringChanged.emit(this.petFiltering);
    }
}