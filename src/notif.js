let container = document.createElement("div");
container.id = "container";
let id = 0;
export default function notify(opts = {}) {
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
    let i = (opts.in || '').match(/[^ ,]+/g)
    let o = (opts.out || '').match(/[^ ,]+/g)
    let p = (opts.progressbar||'').match(/[^ ,]+/g)
    id++;
    let row = document.createElement('div');
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
    let s = 0, a = setInterval(() => {
        s += 100;
        if (p && duration) { row.querySelector('.' + p[0]).style.width = (duration - s) / duration * 100 + '%'; }
        if (s >= duration) { clearInterval(a); duration && close(row); }
    }, 100);

    let close = (e) => {
        o && e.classList.add(...o);
        setTimeout(() => { e.remove();!container.children[0] && container.remove() }, parseFloat(getComputedStyle(row).getPropertyValue("animation-duration")) * 1000)
    }
}