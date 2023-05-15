console.log("background");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.contentScriptQuery == "fetch") {
    fetch(request.options.url, {
      method: request.options.method,
      headers: {},
      body: request.options.data,
    })
      .then((response) => response.json())
      .then((response) => sendResponse(response))
      .catch((error) => console.log("Error:", error));
    return true;
  }
});
