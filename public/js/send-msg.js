const sendMsg = async e => {
    e.preventDefault();

    console.log("Attempt to send msg");

    const msg = document.querySelector(".chat-input-textarea").innerHTML.trim();

    if (msg) {
        const res = await fetch('/api/messages', {
            method: "POST",
            body: JSON.stringify({
                text: msg,
                user_generated: true,
            }),
            headers: { "Content-type": "application/json" }
        });

        if (res.ok) {
            window.location.reload();
        } else {
            alert("You suck!");
        }
    }
}

document.querySelector(".send-msg-form").addEventListener("submit", sendMsg);