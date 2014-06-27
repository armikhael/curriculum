var curriculum = angular.module('curriculum', []);

curriculum.controller('curriculum-controller', function ($scope) {

	$scope.dock = [		{enlace: "#intro",     icono: "fa-fire",       titulo: "Intro"},
				   		{enlace: "#personal",  icono: "fa-book",       titulo: "Resume"},
				   		{enlace: "#events",    icono: "fa-rocket",     titulo: "Events"},
				   		{enlace: "#service",   icono: "fa-cogs",       titulo: "Skills"},
						{enlace: "#works",     icono: "fa-suitcase",   titulo: "Works"},
						{enlace: "#blog",      icono: "fa-pencil",     titulo: "Blog"},
						{enlace: "#contact",   icono: "fa-envelope",   titulo: "Contact"},
		          ];

});