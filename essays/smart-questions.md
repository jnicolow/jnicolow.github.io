---
layout: essay
type: essay
title: "Stupid Questions, or Lazy Questions?"
# All dates must be YYYY-MM-DD format!
date: 2023-01-26
published: true
labels:
  - Questions
  - Answers
  - StackOverflow
---

<img width="300px" class="rounded float-start pe-4" src="../img/smart-questions/4955020-2312776580.jpg">

## “There is no such thing as a bad question”

Growing up we are all taught “there is no such thing as a bad question”; is that the case? Well it’s not so much the argument of is the question bad/stupid and more of was the question lazy. Meaning was the question asked in hopes that the respense would be spoon-fed to them. Growing up I would always ask my data questions about things I was curious about; as I got older he started to respond with “look it up more” my response was oftend “I’m not that curious” showing that I was asking a lazy question where I just wanted a no-effort immediate answer given to me.

## Smart Questions

Unlike lazy question smart questions are questions where the asker tried the best to find a solution on their own and then with a good understanding for the topic asked the question. This topic reminds me of and answer a coworker gave me at my first programming job “if you spend a lot of time trying to solve a problem you cannot you are wasting your time, if you haven’t tried and you come straight to me you are waisting my time” this rule can generally be applied to most questions. Including those in the programming field of course. When debugging obviously initially you do no understand the problem other wise you would not have gotten the bug but this does not mean you should go straight to asking.

## Online Forums
The problem of bad or stupid questions is often brought up in regards to answer forums. One example of such a forum is reddit. I remember my friend sent me a redit where the user asked if you can drive from Oʻahu to Maui. The user could have easily googled this and found an answer on their own with out wasting the time of other users of this forum. Another example of a question forum but devoted to programming questions is stack overflow. I have found answers to many questions I have had through my years working with various programming languages; through this experience I have seen many bad questions and many great questions. Most of the people answering these questions are volunteering their time to these forums and due to that responses to bad questions can seem hostile because these bad questions are wasting these volunteers time. Below is an example of a bad question:
```
Q: I need help writing a java program called StarsRec that prints out a rectangle of stars (*). Based upon user input.
Sample Outputs:
***
***
***
***
***
```
Not only is this question expecting an easy answer but it also is very unclear and infact due to this it was closed ```closed as unclear what you’re asking````

Now that’s a bad question but what does a good question look like? Well as mentioned above the one asking should have spent time trying to figure it out on their own. It is clear in the question if the person asking understands the topic and has put energy into it. Such as the question above the user provided no code and no idea on how to solve the problem. Where as below the user shows that they have an understanding of the topic. 
```
Q: Let's take a fully-connected neural network with one hidden layer as an example. The input layer consists of 5 units that are each connected to all hidden neurons. In total there are 10 hidden neurons.
Libraries such as Theano and Tensorflow allow multidimensional input/output shapes. For example, we could use sentences of 5 words where each word is represented by a 300d vector.
How is such an input mapped on the described neural network? I do not understand what an ouptut shape of (None, 5, 300) (just an example) means. In my imagination we just have a bunch of neurons through which single numbers flow.
When I have an output shape of (None, 5, 300), how much neurons do I have in the corresponding network? How do I connect the words to my neural network?


 A: Yes, we just have a bunch of neurons throuhg which single numbers flow.
But: if you must give your network 5 numbers as input, it's then convenient to give these numbers in an array with length 5.
And if you're giving 30 thousand examples for your network to train, then it's convenient to create an array with 30 thousand elements, each element being an array of 5 numbers.
In the end, this input with 30 thousand examples of 5 numbers is an array with shape (30000,5).
Each layer then has it's own output shape. Each layer's output is certainly related to its own amount of neurons. Each neuron will throw out a number (or sometimes an array, depending on which layer type you're using). But 10 neurons together will throw out 10 numbers, which will then be packed in an array shaped (30000,10).
The word "None" in those shapes is related to the batch size (the amount of examples you give for training or predicting). You don't define that number, it is automatically understood when you pass a batch.
Looking at your network:
When you have an input of 5 units, you got an input shape of (None,5). But you actually say only (5,) to your model, because the None part is the batch size, which will only appear when training.
This number means: you have to give your network an array with a number of samples, each sample being an array of 5 numbers.
Then, your hidden layer with 10 neurons will calculate and give you 10 numbers as output, in an array shaped as (None, 10).
What is a (None,5,300)?
If you're saying that each word is a 300d vector, there are a few different ways to translate a word in that.
One of the common ways is: how many words you have in your dictionary? If you have a dictionary with 300 words, you can then make each word be a vector with 300 elements, being all zeros, except for one of them.
Say word "hello" is the first word in your dictionary, it's vector will be [1,0,0,0, ...., 0]
Say word "my" is the second word in your dictionary, it's vector will be [0,1,0,0, ...., 0]
And the word "fly" is the last one in the dictionary, it's vector will be [0,0,0,0, ...., 1]
You do this for your entire dictionary, and whenever you have to pass the word "hello" to your network, you will pass [1,0,0,0 ..., 0] instead.
A sentence with five words will then be an array with five of these arrays. This means, a sentence with five words will be shaped as (5, 300). If you pass 30 thousand sentences as examples: (30000,5,300). In the model, "None" appears as the batch size (None, 5, 300)
There are also other options, such as creating a word Embedding, which will translate the words into vectors of meanings. Meanings which only the network will understand. (There is the Embedding layer on Keras for that).
There are also things called CBOW (continous bag of words).
You have to know what you want to do first, so you can translate your words in some array that fits the network's requirements.
How many neurons do I have for an output of (None,5,300)?
This only tells you about the last layer. The other layers' outputs were all calculated and packed together by the following layers, which changed the output. Each layer has its own output. (When you have a model, you can do a model.summary() and see the output of each layer.)
Even though, it's impossible to answer that question without knowing which types of layers you're using.
There are layers such as Dense that throw out things like (BatchSize,NumberOfNeurons)
But there are layers such as Convolution2D that throw out things like (BatchSize, numberOfChannels, pixelsInX, pixelsInY). For instance, a regular image has three channels: red, blue and green. An array for passing a regular image would be like (3,sizeX,sizeY).
It all depends on which layer type you're using.
Using a word embedding
For using an embedding, it's interesting to read keras documentation about it.
For that you will have to transform your words in indices.
Instead of saying that each word in your dictionary is a vector, you say it's a number.
Word "hello" is 1
Word "my" is 2
Word "fly" is theSizeOfYourDictionary
If you want each sentence to have 100 words, then your input shape will be (None, 100). Where each array of 100 numbers contains numbers representing the words in your dictionary.
The first layer in your model will be an Embedding layer.
model = Sequential() model.add(Embedding(theSizeOfYourDictionary, 300, input_length=100)
This way, you're creating vectors of size 300 for each word, passing sequences of 100 words. (I'm not used to embeddings, but it seems 300 is a big number, it could be less).
The output of this embedding will be (None, 100, 300).
Then you connect other layers after it.
```
## Conclusion
Here we can see that both the question shows a deep understanding of the topic and they received an indepth answer. Compared to the first question which was closed as a response.

These examples show why it is important to ask smart questions on these forums. Not only do you avoid wasting other’s time but you also have a better chance of getting the answers you are looking for.
