let container = document.createElement("div");
container.id = "container";
let id = 0;
let notify = (opts) => {
    // default position when empty is topleft
    let position = 'bottomright';//but you can choose bottomleft or topright or bottomright
    switch (position) {
        case 'topright':
            position = 'top:0;right:0'
            break;
        case 'bottomleft':
            position = 'bottom:0';
            break;
        case 'bottomright':
            position = 'bottom:0;right:0'
            break;
        default:
            position = 'top:0;'
    }
    container.style = position;
    if (!container.children[0]) { let body = document.getElementsByTagName('body')[0]; body.append(container); }
    let duration = opts.duration || 0;
    let row = document.createElement('div');
    let clear = document.createElement('button')
    clear.innerHTML = 'Clear Notifications';
    clear.addEventListener('click', () => clearf());
    let i = opts.in ? opts.in.match(/[^ ,]+/g) : [];
    let o = opts.out ? opts.out.match(/[^ ,]+/g) : [];
    let c = opts.clearbtn ? opts.clearbtn.match(/[^ ,]+/g) : [];
    let p = opts.progressbar ? opts.progressbar.match(/[^ ,]+/g) : [];

    id++;
    clear.classList.add(...c)
    let progressbar = duration && p ? "<div class='" + p.join(' ') + "'></div>" : "";
    row.innerHTML = opts.block || "Box </br><a onclick='()=>body.style=\''fontsize:5000'\'>Close</a>" + id + progressbar;
    i && row.classList.add(...i);
    if (position.match(/top/i)) {
        container.append(row);
        container.scrollTo(0, container.scrollHeight)
    }
    else {
        container.prepend(row);
        container.scrollTo(container.scrollHeight, 0)
    }
    // alert(container.children.length)
    if (container.children.length == 2 && container.children.length < 3) { container.append(clear) }
    // if (container.children[1])container.append(clear)


    // container.scrollHeight > window.innerHeight;
    let s = 0, a = setInterval(() => {
        s += 100;
        if (p[0] && duration) { row.querySelector('.' + p[0]).style.width = (duration - s) / duration * 100 + '%'; }
        if (s >= duration) { clearInterval(a); duration && close(row); }
    }, 100);

    let close = (e) => {
        o && e.classList.add(...o);
        setTimeout(() => { e.remove(); !container.children[0] && container.remove() }, parseFloat(getComputedStyle(row).getPropertyValue("animation-duration")) * 1000)
    }

    let clearf = () => {
        container.childNodes.forEach(v=>{cleartInterval();v.remove()})
        console.log(container.children)
    }
}