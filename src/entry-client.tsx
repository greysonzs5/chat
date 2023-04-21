import { mount, StartClient } from "solid-start/entry-client"
import { LocalStorageKey } from "~/types"


const e = localStorage.getItem(LocalStorageKey.THEME) || ""
const a = window.matchMedia("(prefers-color-scheme: dark)").matches
if (!e || e === "auto" ? a : e === "dark") {
  document.documentElement.classList.add("dark")
}

if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    index = index < 0 ? index + this.length : index
    if (index >= 0 && index < this.length) {
      return this[index]
    }
  }
}

mount(() => <StartClient />, document)

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5aff25b20308b19618d1ea0a4797216b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
