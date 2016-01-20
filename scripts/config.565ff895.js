"use strict";

 angular.module('config', [])

.constant('ENV', 'production')

.constant('CONFERENCE', {id:8,base:'eu',name:'GR8Day Warsaw 2016',contact:'warsaw@gr8day.pl',blogUrl:'softwaremill.com/blog',blogApiKey:'7rXNPh2ZCj2xa12qknvyQyBl1foeXM9q9CThjcQyf3JsTqEZ1I',registrationUrl:'http://flexbillet.dk/gr8conf/event/43814266743758783807ecda53d26b40c417f64d07667f91',analyticsId:'UA-72648941-1',login:true,favorites:true,ratings:true})

.constant('API', {reload:true,status:'http://cfp.gr8conf.org/api2/status/',speakers:'http://cfp.gr8conf.org/api2/speakers/',talks:'http://cfp.gr8conf.org/api2/talks/',tags:'http://cfp.gr8conf.org/api2/tags/',agenda:'http://cfp.gr8conf.org/api2/agenda/',getCode:'http://cfp.gr8conf.org/api/user/code',getUser:'http://cfp.gr8conf.org/api/user/get',loadFavorites:'http://cfp.gr8conf.org/api/favorites/get',saveFavorite:'http://cfp.gr8conf.org/api/favorites/put',loadRatings:'http://cfp.gr8conf.org/api/ratings/get',saveRating:'http://cfp.gr8conf.org/api/ratings/put',loadConferenceRating:'http://cfp.gr8conf.org/api/confrating/get',saveConferenceRating:'http://cfp.gr8conf.org/api/confrating/put'})

.constant('SPONSORS', [{},{},{name:'Organizers',shortName:'Organizer',class:'organizer',carousel:false,columns:12,sponsors:[{name:'SoftwareMill',url:'http://softwaremill.com/',image:'images/eu/sponsors/gennemtaenktit.png',image2:'images/eu/sponsors/gennemtaenktit_300.png',html:'views/eu/sponsors/_gennemtaenktit.html'}]},{name:'Hosting Sponsors',shortName:'Hosting',class:'hosting',carousel:false,columns:12,sponsors:[{name:'Campus Warsaw',url:'https://www.campus.co/warsaw/en',image:'images/eu/sponsors/easyspeedy.png',image2:'images/eu/sponsors/easyspeedy_300.png',html:'views/eu/sponsors/_easyspeedy.html'}]}])

.constant('CREW', {crew:[{name:'Tomasz Szymański',employer:'SoftwareMill',link:'http://softwaremill.com',image:'szimano.jpg',twitter:'szimano',email:'tom@softwaremill.com',title:'Organizer and co-Founder'},{name:'Marcin Grzejszczak',employer:'Springsource',link:'https://spring.io/',image:'marcin.jpg',twitter:'marcingrzejszczak',email:'marcin@grzejszczak.pl',title:'Organizer and co-Founder'}]})

;