/**
 * Created by garry on 2017/5/25.
 */
function Priority_queue(){
    var data = data || [];

    function initializer(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    
    this.enqueue = function (element, priority) {
        var newElement = new initializer(element, priority);
        if(this.isEmpty()){
            data.push(newElement);
        }else{
            for(var i = 0; i < data.length; ++i){
                if(newElement.priority < data[i].priority){
                    data.splice(i, 0, newElement);
                    return;
                }
            }
            data.push(newElement);
        }

    };

    this.length = function () {
        return data.length;
    };

    this.peek = function () {
        return data[0];
    };

    this.isEmpty = function () {
        return data.length === 0;
    };

    this.dequeue = function () {
        return data.shift();
    }


}



