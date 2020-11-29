(() => {
    application.register("counter", class extends Stimulus.Controller {
        static get targets() {
            return [ "output" ]
        }
        
        connect(){
            console.log("connected to dom...");
        }
        
        disconnect(){
            console.log("disconnect from dom...");
        }
        
        initialize(){
            // console.log("initialize", this.data.get('count'));
            // console.log("initialize", this.count);
            // this.outputTarget.textContent = this.data.get('count')
            console.log("initialize...");
            this.outputTarget.textContent = this.count
        }

        increment(){
            console.log("increment", this.count);
            this.count++
            console.log("incremented", this.count);
            // this.data.set("count", this.outputTarget.textContent++)
        }

        decrement(){
            console.log("decrement", this.count);
            this.count--
            console.log("decremented", this.count);
            // this.data.set("count", this.outputTarget.textContent--)
        }

        // getter
        get count(){
            return this.data.get("count")
        }

        // setter
        set count(value){
            this.data.set("count", value)
            this.outputTarget.textContent = this.count
        }
    })
})()