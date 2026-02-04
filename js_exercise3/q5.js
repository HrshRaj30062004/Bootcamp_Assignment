function Tracker(){
  if(this instanceof Tracker){
    Tracker.instances++;
  }else{
    Tracker.invocations++;
  }
}

Tracker.instances=0;
Tracker.invocations=0;

Tracker();
Tracker();
new Tracker();
new Tracker();
new Tracker();

console.log("Function calls:", Tracker.invocations);
console.log("Instances created:", Tracker.instances);
