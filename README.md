# owic-hackathon

* `dotnet restore`
* `dotnet run`

in Ui
* `npm install`
* `npm build:watch`

to run tests
* `npm build:test`

to create db
* remove current migrations folder
* remove current from output path
* dotnet ef migrations add MyMigration
* dotnet ef database update

api calls
* GET http://localhost:5000/api/PetCupid
* GET http://localhost:5000/api/PetCupid/1
* POST http://localhost:5000/api/PetCupid 
```json
{
    "name": "Sjoko",
    "kind": "blub",
    "img": "images/chicken1.jpg",
    "profileText": "Meet Princess Fluffybutt! She is one of the fluffiest chickens you will ever meet. Most often you'll find Princess cuddled up in the warmest spot she can find, and if that happens to be in your lap, well then that's fine for her too! Princess also enjoys nomming treats out of your hand, clucking softly under her breath, and following her three sisters around the yard. Get to know Princess today!",
    "popularity": 0
  }
```
* PUT http://localhost:5000/api/PetCupid/1
```json
{
    "id": 1,
    "name": "Sjoko",
    "kind": "blub",
    "img": "images/chicken1.jpg",
    "profileText": "Meet Princess Fluffybutt! She is one of the fluffiest chickens you will ever meet. Most often you'll find Princess cuddled up in the warmest spot she can find, and if that happens to be in your lap, well then that's fine for her too! Princess also enjoys nomming treats out of your hand, clucking softly under her breath, and following her three sisters around the yard. Get to know Princess today!",
    "popularity": 0
  }
```
* DELETE http://localhost:5000/api/PetCupid/1


```js

module.exports = function(app) {

    var data = [
        {
            name: "Princess",
            kind: "chicken",
            img: "images/chicken1.jpg",
            profileText: "Meet Princess Fluffybutt! She is one of the fluffiest chickens you will ever meet. Most often you'll find Princess cuddled up in the warmest spot she can find, and if that happens to be in your lap, well then that's fine for her too! Princess also enjoys nomming treats out of your hand, clucking softly under her breath, and following her three sisters around the yard. Get to know Princess today!",
            popularity: 0
        }, {
            name: "MrFuzz",
            kind: "cat",
            img: "images/cat1.jpg",
            profileText: "MrFuzz loves belly rubs, and likes playing with pieces of string",
            popularity: 0
        }, {
            name: "Burt",
            kind: "dog",
            img: "images/dog1.jpg",
            profileText: "Burt looks cute, but is in reality a though guy. Secretly wants to work for the FBI",
            popularity: 0
        }, {
            name: "MissPoes",
            kind: "cat",
            img: "images/cat2.jpg",
            profileText: "MissPoes is a classy lady who appreciates gentle pets",
            popularity: 0
        }, {
            name: "Lady",
            kind: "dog",
            img: "images/dog2.jpg",
            profileText: "Lady isn't always very lady-like. She loves rolling in the mud and barking at naughty squirrels",
            popularity: 0
        }, {
            name: "Grumpy",
            kind: "cat",
            img: "images/cat3.jpg",
            profileText: "Grumpy basically hates everything, especially dogs. He does looove lasagne though",
            popularity: 0
        }, {
            name: "Bobby",
            kind: "dog",
            img: "images/dog3.jpg",
            profileText: "Bobby loves to fetch balls and chase rabbits. Great with kids.",
            popularity: 0
        }
    ];

    function getPetWithName(name) {
        var petsWithName = data.filter(function (el) {
            return el.name.toLowerCase() === name.toLowerCase();
        });
        return petsWithName[0];
    }

    app.get("/pets", function (req, res) {
        res.json(data);
    });

    app.get("/pets/:name", function (req, res) {
        res.json(getPetWithName(req.params.name));
    });

    app.post("/pets/:name/incrementPopularity", function (req, res) {
        var petWithName = getPetWithName(req.params.name);
        petWithName.popularity += 1;
        res.json(petWithName);
    });

}

```