
const SERVER_URL = "no-sand-diggers-friendly-minecraft-server.mcph.co"
const PING_URL = `https://api.minetools.eu/ping/${SERVER_URL}`;

function getServerPing() {
  return fetch(PING_URL)
    .then(res => res.json())
    .then(data => data)
}

function setServerStatus() {
  document.querySelector(".server-url").innerHTML = `<b>${SERVER_URL}</b>`
  const serverStatusSection = document.querySelector(".server-status")
  serverStatusSection.innerHTML = "Loading server status...";

  getServerPing()
    .then(data => {
      if (data["error"]) {
        throw Error("Problem connecting to server!")
      }
      console.log(data)
      serverStatusSection.innerHTML = "🟢 Server is online!"
      document.querySelector(".server-icon").src = data["favicon"]
      document.querySelector(".players-online").innerHTML = `${data["players"]["online"]} / ${data["players"]["max"]} players online`
    })
    .catch(error => {
      console.log(error)
      serverStatusSection.innerHTML = "🔴 Server is offline!"
    })
}

window.addEventListener('load', function () {
  setServerStatus()
});