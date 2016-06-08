# leet-in-js
LeetCode in js

# Step to init
+ npm init
+ npm install karma --save-dev
+ npm install karma-jasmine karma-chrome-launcher --save-dev
+ npm install -g karma-cli
+ karma init karma.conf.js
```
$ karma init karma.conf.js

Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
>

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
> *.js
07 06 2016 20:16:46.605:WARN [init]: There is no file matching this pattern.

> test/**/*.js
07 06 2016 20:16:58.147:WARN [init]: There is no file matching this pattern.

>

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
Enter empty string to move to the next question.
>

Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> yes
```
