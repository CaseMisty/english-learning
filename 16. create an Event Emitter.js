// today I'm going to get down to this question.
// This class allows multiple subscribe calls for the same eventName, and it can return a release method.
class EventEmitter {

  // For this task, the class only needs one attribute: eventMap, it maintains a map that subscribes to the object.
  //map:  (eventName,[callback...]),
  // The key is eventName, and the value is an array composed of callback functions with the same eventName 
  //key: eventName,value: An array of callback functions with the same eventName
  eventMap = new Map();

  subscribe(eventName, callback) {
    if (!this.eventMap.has(eventName)) {
      // And the requirement said that same callback could subscribe for same event multiple times, hence the type of values of this map is array.
      // eventName and callback pair is added if it doesn't exist
      this.eventMap.set(eventName, []);
    }
    //eventName exists, add callback to the corresponding array
    this.eventMap.get(eventName).push(callback);

    return {
      //return an object which containing the release method
      release: () => {
        //find the corresponding callback and delete it
        this.eventMap.get(eventName).forEach((item, index) => {
          if (item == callback) {
            this.eventMap.get(eventName).splice(index, 1);
          }
        })
      }
    }
  }
  //  is used to trigger the callbacks, with args relayed
  emit(eventName, ...args) {
    if (this.eventMap.has(eventName)) {
      //if eventName exists,call the callback in eventMap accordingly
      this.eventMap.get(eventName).forEach(call => {
        call.apply(this, args);
      })
    }
  }
}
