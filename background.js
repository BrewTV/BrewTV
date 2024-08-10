chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fetchData") {
        fetch(message.url)
            .then(response => response.json())
            .then(data => sendResponse({ data }))
            .catch(error => sendResponse({ error }));
        return true;
    }

    if (message.action === "postData") {
        fetch(message.url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message.payload)
        })
        .then(response => response.json())
        .then(data => sendResponse({ data }))
        .catch(error => sendResponse({ error }));
        return true;
    }
});