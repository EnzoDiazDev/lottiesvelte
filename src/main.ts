import App from "./App.svelte";

const app = new App({
    target: document.body
});

//appends scripts to the end of de file
document.body.innerHTML += `<script type="text/javascript" src="/js/materialize.min.js"></script>
<script type="text/javascript" src="/js/main.js"></script>`;

export default app;
