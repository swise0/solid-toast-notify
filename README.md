## Syntax
notify({in:string,out:string,duration:number,progressbar:string})}

## Input Values
[in]:string = css classes to add separated by space or comma to style each notification. You can add classes with animations to make them lively.

[out]:string = same as initialclassname(s) but would be applied to your notifcation when duration is specified.

[progressbar]:string = css classname(s) to add to style progressbar separated by space or comma(,). nb:duration should be specified if you would want to add a progressbar.

## Usage
Name of function is [notify()] and it accepts an object as arguments with therefore contains your option to style ech notification toast.

I shifted all animations from javascript to css for a more customizable experience,

All you have to do is to add your classes.

in
### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)