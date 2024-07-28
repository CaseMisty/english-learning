// please complete the implementation
class EventEmitter {
  events = {}

  subscribe(eventName, callback) {
    // And the requirement said that same callback could subscribe for same event multiple times, hence the type of values of this map is array.
    // eventName and callback pair is added if it doesn't exist
    this.events[eventName] ??= new Map();

    // use a symbol to identify the callback we add
    const key = Symbol();
    // eventName exists, add callback to the corresponding map
    this.events[eventName].set(key, callback);

    return {
      // return an object which containing the release method
      release: () => {
        this.events[eventName].delete(key);
      }
    }
  }
  // is used to trigger the callbacks, with args relayed
  emit(eventName, ...args) {
    Array.from(this.events[eventName].values()).forEach(fn => {
      fn.apply(this, args)
    })
  }
}
// I seem to have forgotten to input the method name just now. Let me see what the error is
