/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Elena",
                Photo: "68.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere descansar un poco y viajar a un lugar de costa",
                touch1: "Móvil",
                feel1: "4",
                con1: "Ver lugares de costa, que esten relativamente cerca",
                ima1: "cartoon-thinking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas para lugares con costa.",
                touch2: "Ordenador",
                feel2: "3",
                con2: " Buscan ofertas pero hay demasiadas webs, y no se fia mucho de las ofertas de internet.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide escoger la ciudad de Cartagena ya que tiene costa y los costes son asequibles para ella y su familia.",
                touch3: "Móvil",
                feel3: "3",
                con3: "Está preocupada por el que hacer y el desplazamiento (coche y aparcamiento)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encontrar un buen hotel para hospedarse y a un buen precio.",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se informa de la ciudad en la web y analiza un plan para hacer en la ciudad",
                touch5: "móvil",
                feel5: "2",
                con5: "Le cuesta un poco utilizar la web y no se aclara mucho",
                ima5: "cartoon-sad.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar y realizar un plan para hacer en la ciudad como turista",
                touch6: "ordenador",
                feel6: "3",
                con6: "Le ha costado aclararse entre tantas webs similares, y no se fia mucho de ellas. Finalmente encontro una que se adecuaba a sus conocimientos",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Shay McGregor",
                Photo: "shay.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a España con su padre, pero él no puede enterarse puesto que es una sorpresa",
                touch1: "agenda",
                feel1: "5",
                con1: "Uno de sus empleados ha estado varias veces en España, y le recomendó que visitarán la costa mediterránea",
                ima1: "cartoon-speaking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Las agencias de viaje están de capa caida, por lo que no le queda más remedio que buscar por internet",
                touch2: "Ordenador (Buscador)",
                feel2: "3",
                con2: "Sabe que muchas webs no disponen de opciones para gente de sus características, pero está dispuesto a intentarlo por si mismo",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Ha comprobado gran cantidad de webs, pero casi ninguna tiene opciones de accesibilidad y leer tal cantidad de información le resulta muy complicado",
                touch3: "Ordenador (Buscador)",
                feel3: "1",
                con3: "Se frustra tanto consigo mismo como con las webs que visita",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra una web sobre Cartagena, una ciudad en la costa mediterránea, que dispone de opciones de accesibilidad que le facilitan mucho la vida",
                touch4: "Ordenador (Buscador)",
                feel4: "4",
                con4: "Le ha resultado muy fácil consultar la información en la web, disponbile con ayuda completamente en su idioma",
                ima4: "cartoon-PChappy.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Decide llamar por teléfono al contacto ofrecido por la web",
                touch5: "Móvil (Llamada)",
                feel5: "3",
                con5: "Aunque la web estaba completamente en inglés, los trabajadores que atienden el teléfono no hablan mucho inglés. Por suerte, su hermana si sabe español y le ayuda a informarse",
                ima5: "cartoon-phoning.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Gracias a la información obtenida, reserva y planifica el viaje",
                touch6: "Ordenador (Booking)",
                feel6: "5",
                con6: "Solo le queda el paso más importante, contarle la sorpresa a su padre!",
                ima6: "cartoon-shaking.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



