class Switch{
    constructor(name,options){
        this.name = name;
        this.options = options
    }
    say(){
        console.log(this.name,this.options);
    }
}

export default Switch;