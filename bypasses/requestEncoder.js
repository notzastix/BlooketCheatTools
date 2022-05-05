var encoder = async (e, t) => {
    let d = window.crypto.getRandomValues(new Uint8Array(12));
    return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: d
    }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
        name: "AES-GCM"
    }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
};
