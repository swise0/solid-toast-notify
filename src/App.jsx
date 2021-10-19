import logo from "./logo.svg";
import notify from "./notif";

function App() {
  return (
    <>
      <div class="trigger">
      <button id="success" onclick={()=>notify({in:'row success intro',duration:2999,out:'outro'})}>Success</button>
        <button id="error" onclick={()=>notify({in:'row error intro',out:'outro',progressbar:'notif-progress-bar',duration:100000})}>Error</button>
        <button id="alert" onclick={()=>notify({in:'row alert intro',duration:2000})}>Alert</button>
        <button id="info" onclick={()=>notify({in:'row info intro',duration:1040})}>Info</button>
        <button id="custom" onclick={()=>notify({in:'custom intro',out:'outro',block:'<a href=\'www.href.com\'>Click Here</a>'})}>Custom</button>
  <button id="custom" onclick={()=>notify({in:'row custom'})}>Custom</button>
      </div>
      <script src='mynotif.js'></script>
    </>);
}

export default App;
