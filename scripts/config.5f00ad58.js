"use strict";

 angular.module('config', [])

.constant('ENV', 'production')

.constant('CONFERENCE', {id:8,base:'pl',name:'GR8Day Warsaw 2016',contact:'gr8day-warsaw@googlegroups.com',blogUrl:'softwaremill.com/blog',blogApiKey:'7rXNPh2ZCj2xa12qknvyQyBl1foeXM9q9CThjcQyf3JsTqEZ1I',registrationUrl:'http://flexbillet.dk/gr8conf/event/43814266743758783807ecda53d26b40c417f64d07667f91',analyticsId:'UA-72648941-1',login:true,favorites:true,ratings:true})

.constant('API', {reload:true,status:'http://cfp.gr8conf.org/api2/status/',speakers:'http://cfp.gr8conf.org/api2/speakers/',talks:'http://cfp.gr8conf.org/api2/talks/',tags:'http://cfp.gr8conf.org/api2/tags/',agenda:'http://cfp.gr8conf.org/api2/agenda/',getCode:'http://cfp.gr8conf.org/api/user/code',getUser:'http://cfp.gr8conf.org/api/user/get',loadFavorites:'http://cfp.gr8conf.org/api/favorites/get',saveFavorite:'http://cfp.gr8conf.org/api/favorites/put',loadRatings:'http://cfp.gr8conf.org/api/ratings/get',saveRating:'http://cfp.gr8conf.org/api/ratings/put',loadConferenceRating:'http://cfp.gr8conf.org/api/confrating/get',saveConferenceRating:'http://cfp.gr8conf.org/api/confrating/put'})

.constant('SPONSORS', [{name:'Organizers',shortName:'Organizer',class:'organizer',carousel:false,columns:12,sponsors:[{name:'Warsaw Groovy User Group',url:'http://www.meetup.com/Warsaw-Groovy-User-Group/',image:'images/pl/sponsors/wgug-logo.png',image2:'images/pl/sponsors/wgug-logo.png',html:'views/pl/sponsors/wgug.html'},{name:'SoftwareMill',url:'http://softwaremill.com/',image:'images/pl/sponsors/Softwaremill2.jpg',image2:'images/pl/sponsors/Softwaremill.jpg',html:'views/pl/sponsors/softwaremill.html'}]}])

.constant('CREW', {crew:[{name:'Tomasz Szymański',employer:'SoftwareMill',link:'http://softwaremill.com',image:'szimano.jpg',twitter:'szimano',email:'tom@softwaremill.com',title:'Organizer and co-Founder'},{name:'Marcin Grzejszczak',employer:'Pivotal',link:'https://spring.io/',image:'marcin.jpg',twitter:'mgrzejszczak',email:'marcin@grzejszczak.pl',title:'Organizer and co-Founder'},{name:'Jakub Nabrdalik',employer:'Allegro',link:'https://solidcraft.eu/',image:'jnb.jpg',twitter:'jnabrdalik',email:'jakubn@gmail.com',title:'Organizer and co-Founder'}]})

;