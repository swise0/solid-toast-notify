import logo from "./logo.svg";
import notify from "./notif";

function App() {
  return (
    <>
      <div class="trigger">
        <button id="success" onclick={() => notify({ in: 'row success intro', duration: 2.9, progressbar: 'notif-progress-bar', out: 'outro' })}>Success (2.9s)</button>
        <button id="error" onclick={() => notify({ in: 'row error intro', out: 'outro', progressbar: 'notif-progress-bar', duration: 10})}>Error (10s)</button>
        <button id="alert" onclick={() => notify({ in: 'row alert intro', duration: 6, out: 'outro',progressbar: 'notif-progress-bar' })}>Alert (6s)</button>
        <button id="info" onclick={() => notify({ in: 'row info intro', duration: 1.04, progressbar: 'notif-progress-bar',out: 'outro' })}>Info (1.04s)</button>
        <button id="custom" onclick={() => notify({out: 'outro', block: '<a href=\'www.href.com\'>Click Here</a>',in: 'row custom intro' })}>Custom</button>
        <button id="custom" onclick={() => notify({ in: 'row custom' })}>Custom</button>
      </div>

      <script src='mynotif.js'></script>
    </>);
}

export default App;
