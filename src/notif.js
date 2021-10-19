let container = document.createElement("div");
container.id = "container";
let id = 0;
export default function notify(o = {}) {
    let position = 'bottomleft'//but you can choose bottomleft or topright or bottomright
    switch (position) {
        case 'topright':
            position = 'top:0;right:0'
            break;
        case 'bottomleft':
            position = 'bottom:0'
            break;
        case 'bottomright':
            position = 'bottom:0;right:0'
            break;
        default:
            position = 'top:0;'
    }
    container.style = position;
    if (!container.children[0]) { let body = document.getElementsByTagName('body')[0]; body.append(container); }
    let d = o.duration * 1000 || 0;
    let a = (o.in || '').match(/[^ ,]+/g)
    let b = (o.out || '').match(/[^ ,]+/g)
    let p = (o.progressbar || '').match(/[^ ,]+/g)
    id++;
    let r = document.createElement('div');
    // let clear = document.createElement('button')
    // clear.innerHTML = 'Clear Notifications';
    // clear.addEventListener('click', () => clearf());
    // let c = (opts.clearbtn || '').match(/[^ ,]+/g)
    // clear.classList.add(...c)
    let close = e => {
        b && e.classList.add(...b)
        setTimeout(() => { e.remove(); !container.children[0] && container.remove() }, parseFloat(getComputedStyle(r).getPropertyValue("animation-duration")) * 1000)
    }
    // let clearf = () => {
    //     container.childNodes.forEach(v=>{cleartInterval();v.remove()})
    //     console.log(container.children)}
    let progressbar = d && p ? "<div class='" + p.join(' ') + "'></div>" : "";
    r.innerHTML = o.block || "Box </br><a onclick='()=>body.style=\''fontsize:5000'\'>Close</a>" + id + progressbar;
    a && r.classList.add(...a);
    if (position.match(/top/i)) {
        container.append(r)
        container.scrollTo(0, container.scrollHeight)
    }
    else {
        container.prepend(r)
        container.scrollTo(container.scrollHeight, 0)
    }
    // if (container.children.length == 2 && container.children.length < 3) { container.append(clear) }

    // container.scrollHeight > window.,innerHeight;


    let s = 0, t = setInterval(() => {
        s += 16.66
        if (p && d) r.querySelector('.' + p[0]).style.width = (d - s) / d * 100 + '%'
        if (s >= d) { clearInterval(t); d && close(r) }
    });


}