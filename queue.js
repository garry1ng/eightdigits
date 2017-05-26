/**
 * Created by garry on 2017/5/25.
 */
function Queue(){
    this.dataStorage = [];
    this.enquene = enquene;
    this.dequene = dequene;
    this.front = front;
    this.back = back;
    this.empty = empty;

}

function enquene(element) {
    this.dataStorage.push(element);

}

function dequene(){
    return this.dataStorage.shift();

}