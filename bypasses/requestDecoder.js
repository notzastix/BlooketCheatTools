// Coded by https://github.com/qaiik/ (a very cool man)
const decoder = async (b, c) => {
    let d = new TextEncoder().encode(c),
        e = await crypto.subtle.digest("SHA-256", d),
        f = await crypto.subtle.importKey("raw", e, { name: "AES-GCM" }, !1, ["encrypt", "decrypt"]),
        a = atob(b),
        g = a.substr(0, 12),
        h = new Uint8Array(Array.from(g).map((a) => a.charCodeAt(0))),
        i = a.substr(12, a.length),
        j = new Uint8Array(Array.from(i).map((a) => a.charCodeAt(0))),
        k = await crypto.subtle.decrypt({ name: "AES-GCM", iv: h }, f, j);
    return new TextDecoder().decode(k);
};
