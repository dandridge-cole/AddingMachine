import KrisStack from "./krisstack.js";


export default class Evaluator{
    //private ops: KrisStack<String> = new KrisStack<>();
    //private Stack<Double> vals = new Stack<Double>();
  //  krisstack  = new KrisStack();
    ops :KrisStack<String> = new KrisStack;
    vals:KrisStack<number> = new KrisStack; 

    public Calculate() { }
    
    public run(toEvaluate:String):number {
        var tokens = toEvaluate.split(" ");
        for (var token of tokens) {
            if      (token == "(") {}
            else if (token == ("+"))    this.ops.push(token);
            else if (token == ("-"))    this.ops.push(token);
            else if (token == ("*"))    this.ops.push(token);
            else if (token == ("/"))    this.ops.push(token);
            else if (token == ("%"))    this.ops.push(token);
            else if (token == ("sqrt")) this.ops.push(token);
            else if (token == (")")) {
                let op = this.ops.pop();
                let v = this.vals.pop();
                if      (op == ("+"))    v = this.vals.pop() + v;
                else if (op == ("-"))    v = this.vals.pop() - v;
                else if (op == ("*"))    v = this.vals.pop() * v;
                else if (op == ("/"))    v = this.vals.pop() / v;
                else if (op == ("%"))    v = this.vals.pop() % v;
                else if (op == ("sqrt")) v = Math.sqrt(v);
                this.vals.push(v);
            } 
            else this.vals.push(Number.parseFloat(token));
        }
        return this.vals.pop();
    }
}