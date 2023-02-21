# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
In `deterministicPartitionKey` function, it is returning the candidate even there we havent the event. which means that we have to add the validation logic to handle the non-event/duplicated call inside of the function.
As the default progress, if we have got the `undefined` value with event parameter, then it should create the new error with `Error` Ojbect or `HTTPErrors` library. but I tried to return the `null`, so that its easy to handle in next part by comparing the data type.
In the Unit-test cases, I implemented several steps to be clarify the logic of the function. hepe the logic should works. Thanks.
