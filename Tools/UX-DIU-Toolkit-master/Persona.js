/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Elena",
				Photo: "68.jpg",
				Quote: "Vive y deja vivir",
				Age: 53,
				Occupation: "Carnicera",
				Family: "Con pareja desde hace 18 año",
				Location: "Torremolinos (Malaga)",
				Character: "Le gusta vivir el momento sin perder de vista el futuro",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Viajar", "Ahorrar y poder dejar de trabajar", "Vivir nuevas experiencias"],
				Frustrations: ["No le gusta la tecnología pero la ve necesaria en la vida actual", "Le gustaría pasar más tiempo en familia", "No entiene las nuevas tecnologiías"],
				Bio: "Nació en Murcia y se mudo a Malaga con 11 años junto a sus padres, su padre le enseño el oficio de carnicera y ha trabajado toda su vida en diferentes Carnicerias. Se planeo montar su propia carniceria pero el temo al fracaso se lo impidio. Le gusta mucho la playa y tomar el sol, tiene 2 hijos.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Tiene muy pocas vacaciones y le preocupa mucho el no estar disfrutando el poco tiempo libre que tiene, por lo que quiere viajar más.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Shay McGregor",
				Photo: "shay.png",
				Quote: "El ser humano es bueno por naturaleza, aunque a veces no lo parezca",
				Age: 25,
				Occupation: "Dueño de una empresa de Whisky",
				Family: "Padres",
				Location: "Edinburgh, Scotland (UK)",
				Character: "Devolverle a su familia todo lo que ellos han dado por él",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 1 }
				], 
				Goals: ["Hacer feliz a su padre.", "Expandir su empresa.", "Visitar todos los paises del mundo.", "Realizar un voluntariado."],
				Frustrations: ["Le gustaría no tener que depender de la gente.", "Su Dislexia.", "Decepcionar a su padre."],
				Bio: "Nació en Escocia, lugar en el que se ha criado. De pequeño le costaba mucho estudiar, más que a los demás niños. Finalmente sus padres lo llevaron al médico y le diagnosticaron dislexia. Debido a su enfermedad, le costó mucho esfuerzo terminar sus estudios, no disponiendo de educación superior. Toda su vida su padre ha sido una figura extremadamente importante y a la que admira mucho. Hace 1 año que su padre se jubiló, dejando en manos de Shay la empresa de Whiskey que fundó. Shay le agradeció mucho este gesto pues debido a su enfermedad probablemente no es el candidato ideal para dirigir una empresa. Por tanto, ahora quiere devolverle el favor cumpliendo el sueño que siempre tuvo su padre juntos, viajar por todo el mundo",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Llevar a su padre de viaje, comenzando por su lugar favorito, España." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])