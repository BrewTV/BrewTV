document.getElementById('fetch').addEventListener('click', () => {
    chrome.runtime.sendMessage({
        action: 'fetchData',
        url: 'https://brew.vanished.lol/api/example'
    }, response => {
        document.getElementById('output').innerText = JSON.stringify(response.data || response.error);
    });
});

document.getElementById('post').addEventListener('click', () => {
    chrome.runtime.sendMessage({
        action: 'postData',
        url: 'https://brew.vanished.lol/api/submit',
        payload: { key: 'value' }
    }, response => {
        document.getElementById('output').innerText = JSON.stringify(response.data || response.error);
    });
});
