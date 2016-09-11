//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //the this keyword is a shortcut used to refer to an object that is being executed by the code.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //implicit binding
      //explicit binding
      //new binding
      //default binding
  // 3) What is the difference between call and apply?

      //Answer

  // 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "thughes",
      email: "thughes@test.com",
      getUsername: function(){
        return this.username;
      }
    };
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year){
  var carObj = {
    make: make,
    model: model,
    year: year,
    move: 0
  };
  return carObj;
}

function moveCar(){
  this.move += 10;
  return this.move;
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar = moveCar;
mustang.moveCar = moveCar;

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = myUser.username(); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  //////iliketurtles
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
