// isPrototypeOf()
	// a method that checks if an object exists in another object's prototype chain.

// Syntax:
	// prototypeobj.isPrototypeOf(object)

// Parameters
	// object - the object whose prototype chain will be searched.

// Return Value
	// Boolean value

// Requirements:
	// It should return true if the Object is in the prototypeObj chain.
	// It should return false if the Object is not in the prototypeObj chain.
	// It should work for any number of prototype links.
	// It should throw an error if prototypeObj is undefined or null.

function isPrototypeOf(prototypeObj, dependentObject) {
  var proto = Object.getPrototypeOf(dependentObject);

  if(prototypeObj === undefined || prototypeObj === null){
    throw new TypeError('The prototype Object is undefined or null.');
  }

  while(proto !== null){
    if(proto === prototypeObj){
	  return true;
	}
	proto = Object.getPrototypeOf(proto);
  }

  return false;
};

tests({
  'It should throw an error if prototypeObj is undefined.': function(){
    var isTypeError = false;
	var testObject = {};
	try {
	  isPrototypeOf(undefined,testObject);
	} catch(e){
	  isTypeError = (e instanceof TypeError);
	}
	eq(isTypeError, true);
  },
  'It should throw an error if prototypeObj is null.': function(){
	var isTypeError = false;
	var testObject = {};
	try {
	  isPrototypeOf(undefined,testObject);
	} catch(e){
	  isTypeError = (e instanceof TypeError);
	}
	eq(isTypeError, true);
  },
  'It should return true if the Object is in the prototypeObj chain.': function(){
	var canine = {
	  bark: function() {
	    console.log('bark');
	  }
	};

	var dog = Object.create(canine);
	  dog.fetch = function() {
	    console.log('fetch');
	  };
		
	var myDog = Object.create(dog);
	var empty = Object.create(null);

	var test = isPrototypeOf(dog, myDog);

	eq(test, true);
  },
  'It should return false if the Object is not in the prototypeObj chain.': function(){
	var canine = {
	  bark: function() {
	    console.log('bark');
	  }
	};

	var dog = Object.create(canine);
	  dog.fetch = function() {
	    console.log('fetch');
	  };
		
	var myDog = Object.create(dog);
	var empty = Object.create(null);

	var test = isPrototypeOf(dog, empty);

	eq(test, false);
  },
  'It should work for any number of prototype links.': function(){
	var canine = {
	  bark: function() {
	    console.log('bark');
	  }
	};

	var dog = Object.create(canine);
	  dog.fetch = function() {
	    console.log('fetch');
	  };
		
	var myDog = Object.create(dog);
	var empty = Object.create(null);

	var test = isPrototypeOf(canine, myDog);

	eq(test, true);
  },
});