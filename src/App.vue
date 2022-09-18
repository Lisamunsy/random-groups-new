<script setup lang="ts">
import { useParticipantsStore } from "./stores/useParticipants";
import { storeToRefs } from "pinia";

const main = useParticipantsStore();

// const  {counter, name, doubleCount} = storeToRefs(main);
const {firstlist, groupListes, groupNumber, showGroups} = storeToRefs(main);

const {addOne, reset, setNumber, grouper, clearList, destroyOne } =main;

let challa ='';
let challo =2;

// const {addOne} =mapActions(useCounterStore, ["addOne"])

// function add(value:number) {
//   main.$patch({
//     counter:counter.value +value
//   })
// }
// function add(value:number) {
//   main.$patch((state)=>(
//     state.counter += value
//   ))
// }

// function reset() {
//   main.$reset();
// }

// function clear() {
//   main.$state ={
//     counter: 123, name:'Bobby'
//   }
// }

main.$subscribe((mutation, state)=>{
  console.log("mutation", mutation);
  console.log("state", state);
})

</script>

<template>
  <nav class="navbar has-background-link " >
    <div class="nav-content">

      <img
        alt="logo"
        class="logo "
        src="./assets/logo.svg"
        width="40"
        height="40"
      />
      <h1 class="title is-5  has-text-light "> Random Groups</h1>
    </div>

  </nav>

  <main class=" is-primary">

    <section class=" has-background-light generator">
      <div class="names-liste">
        <div class="level">
          <div class="control">
            <input class="input" type="text" placeholder="New participant" v-model="challa" id="newParticipant" />
            <button  class="button is-primary mt-2" v-on:click="addOne(challa)" >Add</button>
          </div>
        </div>
  
        <div class="has-background-white"> Participants : {{firstlist.length}} et groupes= {{groupNumber}}
          <ul type="1" v-for="item in firstlist" :key="'el'+item">
            <li class="level"> 
              <span class="">
                {{item}}
              </span>  
              <span class="icon has-text-danger">

                <font-awesome-icon icon="fa-solid fa-square-minus " @click="destroyOne(item)"/>
              </span>
              
            </li>
          </ul>
        </div>
      </div>

      <div class="level group-number-box">
        <div class="control mt-5">
          <label for="grpNum">How many groups do you need? </label>
          <input name="grpNum" class="input" type="number" min='2' placeholder='2' v-model="challo" id="newParticipant" v-on:change="setNumber(challo)"/>
          
        </div>
      </div>
      <div class="actions level">        
        <button class="button is-primary  level-item" v-on:click="grouper" > Generate</button> 
        <button  class="button is-info level-item" @click="reset">Reset</button>
        <button  class="button is-danger level-item" @click="clearList">Clear</button>
      </div>
    </section>

    <section class="has-background-success resultats ">
      <div class="liste-groupe " v-show="showGroups" v-for="item in groupListes" :key="'gr'+item.id+1" >
        <div class=" has-background-white card mb-5 ">
          <div class="card-header">
            <h4 class="card-header-title">Groupe n° {{item.id}}</h4>
          </div>
          <div class="card-content">
            <ul v-for="membre in item.liste " :key="'pers'+membre">
              <li>{{membre}}</li>
            </ul>
          </div>
        </div>
      </div> 
    </section>
    
  </main>
</template>

<style scoped>


@media (min-width: 1024px) {
  /* header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  

}
</style>
