---
layout: essay
type: essay
title: "Design Patterns: Building Better Software"
# All dates must be YYYY-MM-DD format!
date: 2023-04-27
published: false
labels:
  - Design Patterns
  - Anti-Patterns
  - Meteor
  - MongoDB
---

Design patterns are like a set of instructions for how to build a birdhouse. Just how instructions to a birdhouse tell the user how to construct the bird house properly design patterns tell a programmer how to solve a problem. 

## Do We Use Design Patterns
One example of a design pattern that I have used is the Model-View-Controller (MVC) while working with Mongo databases in Meteor. The MVC pattern separates the application into three components. One representing the user interface (view), one representing the data base (model) and finally a controller which “controls” interactions between the two other components. In Meteor, the Mongo DB is the “model” while Blaze handles the user interface “view”. The controller which handles interactions between the MongoDB and the Blaze templating engine is a series of event handlers and methods which listen to user input and make changes to the MongoDB accordingly. 

## Do We All Use Design Patterns
While this is a design pattern I explicitly knew was being used there are many cases where we use design patterns without knowing. For example the Singleton pattern which ensures only one instance of a class allowing it to behave like a global variable. It’s often built-in to programming languages allowing programmers to use it without knowing. It's like building a birdhouse - we follow the instructions without necessarily being aware of the specific steps we take, such as putting all screws in loosely before tightening one.

## Anti-Patterns
Just as there are yin and yang with design patterns come anti-patterns. These are the opposite of design patterns and can result from a variety of causes including lack of design principle understanding, misapplications of design patterns and other factors such as over and under engineering. These anti-patterns can lead to poor code quality, maintenance problems, and other issues. It is important to understand design principles and patterns in order to avoid creating anti-patterns which can lead to a myriad of issues.

## Can I Delete This?
<img width="200px" class="rounded float-start pe-4" src="../img/design-patterns/when-you-delete-code-you-didnt-think-you-needed.jpg">
One example of this is the lava flow where old code that has not been used or understood in a while hardens into stone because the programmer(s) does not know what the code does exactly and does not want to get rid of it in case it's needed. Or the flip side of this problem is the programmer does not understand all of the project and deletes essential portions out of naivete.

