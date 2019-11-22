# lw19-gof-patterns
Here you will find the GoF design patterns, which were discussed in the Learning Week 2019, implemented in JavaScript using ES6 classes.

## Behavioral Patterns
- **Interpreter:** used to define the grammar for instructions that form part of a language or notation, whilst allowing the grammar to be easily extended.
- **Iterator:** used to provide a standard interface for traversing a collection of items in an aggregate object without the need to understand its underlying structure.
- **Memento:** used to reduce coupling between classes that communicate with each other. Instead of classes communicating directly, and thus requiring knowledge of their implementation, the classes send messages via a mediator object.
- **Observer:** used to allow an object to publish changes to its state. Other objects subscribe to be immediately notified of any changes.
- **State:** used to alter the behaviour of an object as its internal state changes. The pattern allows the class for an object to apparently change at run-time.
- **Strategy:**  used to create an interchangeable family of algorithms from which the required process is chosen at run-time.

## Creational Patterns
- **Builder:** used to create complex objects with constituent parts that must be created in the same order or using a specific algorithm. An external class controls the construction algorithm.
- **Factory method:** used to replace class constructors, abstracting the process of object generation so that the type of the object instantiated can be determined at run-time.
- **Prototype:** used to instantiate a new object by copying all of the properties of an existing object, creating an independent clone. This practise is particularly useful when the construction of a new object is inefficient.
- **Singleton:** ensures that only one object of a particular class is ever created. All further references to objects of the singleton class refer to the same underlying instance.

## Structural Patterns
- ...

## Resources
- https://github.com/fbeline/design-patterns-JS
- http://www.blackwasp.co.uk/gofpatterns.aspx
