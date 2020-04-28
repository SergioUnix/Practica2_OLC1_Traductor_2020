//ERROR STATIC NO PERTENECE AL LENGUAJE
//CONSOLE.WRITE ES LA FORMA CORRECTA DE IMPRIMIR EN ESTE ARCHIVO VIENE --- > CONSOLE.WRITELINE
// EL ESTUDIANTE DEBE QUITAR EL MAIN PARA LA CALIFICACION
//FLOAT NO DEBE RECONOCERSE --- > DOUBLE ES LA FORMA EN COMO ESTA EL ENUNCIADO


    static void Main()
    {
        /*
        #################### Archivo de entrada #2 #################
        ## El objetivo de este archivo es evaluar el manejo   ######
        ## correcto de ciclos.                  ######
        ## Los ciclos aceptados son:                           ######
        ####### While
        ####### For
        ####### Ademas se prueba si funciona el switch-case
        */
        Console.WriteLine(">>>>>>>>>>>>>>>> FOR <<<<<<<<<<<<<<<<<<<<");
        //---------------------- FOR -------------------------------

        String cadenaFor2 = "";
        int f;
        for(f=1;f<=7;f++)
        {
            cadenaFor2 =cadenaFor2 + "-"+ f ;
            if(f==7){
                cadenaFor2 = cadenaFor2+";";
            }
        }
        Console.WriteLine(cadenaFor2);

        for(int i=0;i<=5;i++){
            Console.WriteLine("Estoy en la iteracion i="+i);
            Console.WriteLine("se debe de imprimir j desde 5 hasta ["+i+"]");
            int j=0;
            for(j=5;j>=i;j--){
                Console.WriteLine("          Estoy en la iteracion j="+j);
                if(j==i){
                    Console.WriteLine("J ya termino, debo de detenerme");
                }
            }
            if(i==5){
                Console.WriteLine("Ya termine todo, si funciona los for anidados");
            }
        }


        Console.WriteLine(">>>>>>>>>>>>>>>> WHILE <<<<<<<<<<<<<<<<<<<<");
        //-------------------- WHILE --------------------------------
        int iterador = 0;
        while(iterador != (10*2)){
            Console.WriteLine("No soy 20, soy "+iterador);
            iterador = iterador + 1;
            if(iterador == (5*4)){
                Console.WriteLine("Soy 20, debo de detenerme");
            }
        }

        String whileAnidado = "";
        int i1 = 1;
        while (i1 <= 6) {
            whileAnidado = whileAnidado + "Ficha: ";
            int j1 = 1;
            while (j1 <= i1) {
                whileAnidado = whileAnidado + "|" + i1 + ":" + j1 + "| ";
                j1 = j1 + 1;
            }
            Console.WriteLine(whileAnidado);
            i1 = i1 + 1;
        }
        Console.WriteLine(">>>>>>>>>>>>>>>> SWITCH-CASE <<<<<<<<<<<<<<<<<<<<");
        //---------------- SWITCH - CASE ---------------------------------
        int iterador1 = 1;
        while(iterador1<10){
            int x =520/10+5; // x=57
            float x1 = 3.14*3; // x1 = 9.42
            bool x2 = 8<5; // x2 = false
            char x3 = 'b'; // x3='b'
            String x4 = "CadenaDefecto"; // x4="CadenaDefecto"
            switch(iterador1){
                case 1://Imprimir un int
                Console.WriteLine("Si funciona la concatenacion String-int [57] "+x);
                break;
                case 2://Imprimir un float
                Console.WriteLine("Si funciona la concatenacion String-float [9.42] "+x1);
                break;
                case 3://Imprimir un bool
                Console.WriteLine("Si funciona la concatenacion String-bool [false]"+x2);
                break;
                case 4://Imprimir un char
                Console.WriteLine("Si funciona la concatenacion String-char [b]"+x3);
                break;
                case 5://Imprimir un string
                Console.WriteLine("Si funciona la concatenacion String-strint [CadeaDefecto]"+x4);
                break;
                default:
                Console.WriteLine("No entre en ninguno de los casos "+iterador1);
                break;
            }
            iterador1 =  iterador1 + 1;
        }

    }
