function Item(id, name, properties = {}, pictureUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.properties = properties;
}

function GameManager(difficulty, catalog){
    this.difficulty = difficulty;
    this.catalog = catalog;
    this.secretItem = null;
    this.guesses = 0;

    this.startGame = function (){
        //TODO
    }

    this.terminateGame = function (){
        //TODO
    }
}

//Properties()

//Guess()

function Catalog(){
    this.items = []; //harcoded bence
}

function User(){
    this.history = [];
    this.totalScore = 0;
}

function Match(){
    //bilmiyom 
}