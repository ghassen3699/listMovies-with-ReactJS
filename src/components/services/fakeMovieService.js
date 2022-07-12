const movies = [
    {
        _id : "1" ,
        title : "Film 1",
        genre : {
            _id : "1",
            name : "Action"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
        liked:true
    },
    {
        _id : "2" ,
        title : "Film 2",
        genre : {
            _id : "1",
            name : "Action"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
        liked:false
    },
    {
        _id : "3" ,
        title : "Film 3",
        genre : {
            _id : "2",
            name : "Drama"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
        liked:false
    },
    {
        _id : "4" ,
        title : "Film 4",
        genre : {
            _id : "2",
            name : "Drama"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
        liked:true
    },
    {
        _id : "5" ,
        title : "Film 5",
        genre : {
            _id : "1",
            name : "Action"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
        liked:true
    },
    {
        _id : "6" ,
        title : "Film 6",
        genre : {
            _id : "1",
            name : "Action"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
    },
    {
        _id : "7" ,
        title : "Film 7",
        genre : {
            _id : "2",
            name : "Drama"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
        liked:true
    },
    {
        _id : "8" ,
        title : "Film 8",
        genre : {
            _id : "2",
            name : "Drama"
        },
        numberInStock:6,
        publishDate : "2018-01-01",
        liked:false
    }
];

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find(m => m._id === id)
}