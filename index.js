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