
//Rifare l’esercizio della to do list come fatto assieme in classe:
//stampare in pagina un item per ogni elemento contenuto in un array
//ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
//predisporre un input per aggiungere un nuovo item alla lista: 
//digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
Vue.config.devtools = true;
new Vue (
    {   el:"#app",
        data:{
            toDoList: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ],
        newTask:"",
        
        },
        mounted (){
            this.autoFocus;
        },
        methods: {
            autoFocus: function (){
                const element = document.getElementById("newTaskElement");
                element.focus
            },
         
                
            addTask: function() { //con questa funzione prendi il task che ti arriva dall'input
                this.toDoList.push(this.newTask);
                this.newTask = "";
                this.autoFocus;

            },
        
            deleteTask: function (index){
                this.toDoList.splice(index, 1);
                this.autoFocus;
            }
        
        }

});


