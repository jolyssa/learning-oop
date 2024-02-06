console.log('Hello world');

//TWO WAYS TO CREATE AN OBJECT


//Factory Function
function createCircle(radius){
    return {
        radius: radius, // or just radius <- to reduce redundancy
        draw: function(){
            console.log('draw')
        }
    }   
};

const circle = createCircle();

circle.draw();
circle.radius;


//Constructor Function
function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);

another.location = {x: 1}

//adding new properties into objects is very dynamic

//we can add it thru dot notation
another.propertyName1 = 'hello'

//or bracket notation (usesful when there are special characters)
const propertyName = 'center-location'
another[propertyName] = {x: 1}

delete another['location']
//Primitives vs. Objects
//x and y primitives
 function primitive() {
    let x = 10
    let y = x
    x = 20
    console.log(x, y) //x will equal 20, y will equal to 10
 }

//vs. x and y objects
function object() {
    let x = {value: 10}
    let y = x
    x.value = 20
    console.log(x,y) //x will equal 20, y will equal 20
}

primitive()
object()


/**********CHALLENGE**********/

/*
make a stopwatch, named sw to have the following properties and methods
.start()
.stop()
.reset()
*/

function Watch() {
    let seconds = 0
    this.start = function(){
        Date.now()
    }
}
