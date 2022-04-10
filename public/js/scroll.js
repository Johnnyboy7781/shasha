const scrollEl = document.querySelector(".chat-messages");

const scroll = el => {
    console.log("Opened");
    el.scrollTo(0, el.scrollHeight);
}

scroll(scrollEl);