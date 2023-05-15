export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const chromeFetch = (options: any, callback: any) => {
  chrome.runtime.sendMessage(
    {
      contentScriptQuery: "fetch",
      message: "",
      options,
    },
    function (response) {
      if (response != undefined && response != "") {
        callback(response);
      } else {
        callback(null);
      }
    }
  );
};
