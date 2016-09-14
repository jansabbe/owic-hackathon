import { Component } from '@angular/core';

interface IPet {
    name: string,
    kind: "chicken" | "cat" | "dog",
    img: string,
    profileText: string
}

@Component({
    selector: "gallery",
    template: require<string>('./gallery.component.html')
})
export class GalleryComponent {

    pets: IPet[] = [
        {
            name: "Princess",
            kind: "chicken",
            img: "/assets/chicken1.jpg",
            profileText: "Meet Princess Fluffybutt! She is one of the fluffiest chickens you will ever meet. Most often you'll find Princess cuddled up in the warmest spot she can find, and if that happens to be in your lap, well then that's fine for her too! Princess also enjoys nomming treats out of your hand, clucking softly under her breath, and following her three sisters around the yard. Get to know Princess today!"
        }, {
            name: "MrFuzz",
            kind: "cat",
            img: "/assets/cat1.jpg",
            profileText: "MrFuzz loves belly rubs, and likes playing with pieces of string"
        }, {
            name: "Burt",
            kind: "dog",
            img: "/assets/dog1.jpg",
            profileText: "Burt looks cute, but is in reality a though guy. Secretly wants to work for the FBI"
        }, {
            name: "MissPoes",
            kind: "cat",
            img: "/assets/cat2.jpg",
            profileText: "MissPoes is a classy lady who appreciates gentle pets"
        }, {
            name: "Lady",
            kind: "dog",
            img: "/assets/dog2.jpg",
            profileText: "Lady isn't always very lady-like. She loves rolling in the mud and barking at naughty squirrels"
        }, {
            name: "Grumpy",
            kind: "cat",
            img: "/assets/cat3.jpg",
            profileText: "Grumpy basically hates everything, especially dogs. He does looove lasagne though"
        }, {
            name: "Bobby",
            kind: "dog",
            img: "/assets/dog3.jpg",
            profileText: "Bobby loves to fetch balls and chase rabbits. Great with kids."
        }
    ];
}