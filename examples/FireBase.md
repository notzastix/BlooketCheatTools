# Swapping
So you may have a couple of questions about how swapping works<br>
## **Why does swapping not take you gold?**
So basicly in the Blooket-Source how swapping works, is it sends the swap request, then gets the other plays gold then sets your gold to that (all client-sided)<br>
so if we just send the first requst and dont edit our gold we can swap without the downside of losing gold

# Hacking
Litterly the same as swapping

# How do I find the "val" object?
1. do the action you want to do (Needs to be somthing like swapping, or setting a players crypto, not client side) example: swapping or hacking a player
2. then as fast as you can type `debugger` in the console
3. go to the network tab and look at the last request that has the location as `https://fb.blooket.com/c/firebase/games/${gameId}/v`
4. copy the payload
5. decode the payload with my payload decoder
6. figure out what value is what (ussaly starts with the first letter of the actaul value)
7. forge the requet using my example
