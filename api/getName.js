const response = await fetch('https://api.blooket.com/api/users/verify-session', {
    method: "GET",
    headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    },
    credentials: "include"
});
const data = await response.json();
let name = data.name;
