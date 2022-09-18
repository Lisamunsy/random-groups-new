import { defineStore } from "pinia";

export const useParticipantsStore = defineStore("main", {
    state:() =>({
        firstlist:[] as string[],
        groupNumber: 2,
        groupListes:[{
            id: 0 as number,
            liste:[] as string[]
        }],
        showGroups:false,
        backupList:[] as string[],
    }),
    getters:{
    }
    ,
    actions:{
        addOne(nom: string ){
            if(nom !== ""){
                this.firstlist.push(nom);
                this.backupList.push(nom);
            }
        },
        reset(){
            this.firstlist=JSON.parse(JSON.stringify(this.backupList));
            this.groupNumber = 2;
            this.groupListes = [];
            this.showGroups =false;
        },
        setNumber(num: number){
            if (num >= 2) {
                this.groupNumber = num;
            }
        },
        grouper(){
           
            if (this.firstlist.length>=this.groupNumber) {
                this.showGroups =true;
                
                const lefties= (this.firstlist.length)%(this.groupNumber);
                const fullies=(this.firstlist.length - lefties)/(this.groupNumber)
                this.groupListes=[]
    
                for (let i=0; i<this.groupNumber;i++){
                    const newGroupe= {
                        id: i+1,
                        liste: [] as string[]}
                this.groupListes.push(newGroupe)
                // console.log("Listes faites");
                }
    
                for (let g = 0; g < this.groupListes.length; g++) {
                    if(this.firstlist.length>= this.firstlist.length-(fullies*g)){
                        const element = [] as string[];
                        for (let j = 0; j < fullies; j++) {
                            const rand = Math.floor(Math.random() * (this.firstlist.length));
                            // console.log(rand)
                            element.push(this.firstlist[rand])
                            this.firstlist.splice(rand,1);
                        }
                        this.groupListes[g].liste = element
                    }
                    // console.log(this.firstlist.length)
                }
                for (let j = 0; j <= this.groupListes.length; j++) {
                if(this.firstlist.length<=lefties){
                     
                         // const rand = Math.floor(Math.random() * (this.firstlist.length));
                         this.groupListes[j].liste.push(this.firstlist[0])
                         this.firstlist.splice(0,1);
                     }
                 }   
            }
            
        }
        
    }

   
})