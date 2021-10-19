## Syntax
```typescript
notify({in:'class1 class2',out:'class3 class4',duration:number,progressbar:'class5'})}
```

## Input Values
`in`:string = css classes to add separated by space or comma to style each notification. You can add classes with animations to make them lively.
>eg: `notify({in:'row success intro'})`

`out`:string = same syntax as initialclassname(s) but would be applied to your notifcation when duration is specified.
>eg: `notify({out: 'outro'})`
`duration`:string = time in seconds before the notification ends.
>I guess the duration of most notifications aren't less than 5 seconds considering the number of text to be read.

`progressbar`:string = css classname(s) to add to style progressbar separated by space or comma(,).
>eg: `notify({progressbar: 'notif-progress-bar',duration: 2.9})`
>note:duration should be specified in order to animate the progressbar.

`block`:html or string = this is quite a demo, but you already know what it does.. simply takes in html block code into the notification toast.
>eg: `notify({block: '<a href=\'www.solidjs.com\'>Click Here</a>'})`

>Note that how the order of the input values doesnt matter

## Usage
Name of the function call is `notify()` and it accepts an object as an argument which contain options to style each notification toast.

I shifted all animations from javascript to css to add more control and customization to the animations and styling.

All you have to do is to add your css class names to each function call.

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)
