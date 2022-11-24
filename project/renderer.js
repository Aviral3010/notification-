/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const but = document.querySelector("button")

but.addEventListener("click", () => {
    Notification.requestPermission().then(per => {
        if (per === "granted") {
            new Notification("example", {
                body: "this is the body of notification",
                // tag: "welcome message",
            })
            console.log("ol");
        } else {
            alert(per)
        }
        })
})