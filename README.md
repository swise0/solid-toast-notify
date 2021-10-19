## Syntax
```typescript
notify({in:'class1 class2',out:'class3 class4',duration:number,progressbar:'class5'})}
```

## Input Values
`in`:string = css classes to add separated by space or comma to style each notification. You can add classes with animations to make them lively.

`out`:string = same syntax as initialclassname(s) but would be applied to your notifcation when duration is specified.

`duration`:string = milliseconds before the notification ends.
>Note : 1000 =1s, 2000=2s, 8000=8s and 55000 =55s(i mean which toast notification takes that long 😂)
>I guess the duration of most notifications aren't less than 5 seconds considering the number of text to be read.

`progressbar`:string = css classname(s) to add to style progressbar separated by space or comma(,).
>nb:duration should be specified in order to animate the progressbar.

`block`:htmlstring = this is quite a demo, but you already know what it does.. simply takes in html block code into the notification toast.

>feature will be coming sooner than you expect

## Usage
Name of the function call is `notify()` and it accepts an object as an argument which contain options to style each notification toast.

I shifted all animations from javascript to css for a more customizable experience,

All you have to do is to add your css class names to each function call.

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)
