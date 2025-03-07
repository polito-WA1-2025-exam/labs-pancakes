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

//Container object
function Catalog(){
    this.items = [];

    //I am defining these for the sake of 2. question in Lab01
    this.addItem = function (item){
        //addItem
    }

    this.removeItem = function (itemId){
        //removeItem
    }

    this.getItem = function (itemId){
        //getItem
    }

    this.getAllItems = function (){
        //getAllItems
    }
}

function User(){
    this.history = [];
    this.totalScore = 0;
}

function Match(){
    //bilmiyom 
}