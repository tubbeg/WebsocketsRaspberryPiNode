$( document ).ready(() => {
    let state = true;
    document.getElementById("myBtn").disabled = true; 
    const socket = io.connect('http://localhost');
    document.getElementById("myBtn").disabled = false; 
    document.getElementById("myBtn").addEventListener("click", () => {
        state = !state;
        console.log(state);
        socket.emit('stateTrigger', { myState: state });
    }); 
});
