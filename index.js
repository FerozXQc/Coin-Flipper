function coinFlip(){

    const numCoin = document.getElementById("box").value;
    const button = document.getElementById("button");
    const coinResult = document.getElementById("coinResult");
    const coinImages = document.getElementById("coinImages");
    const values = [];
    const images = [];
    let flip;

    for(let i = 0; i < numCoin; i++){
   
        const value = Math.floor(Math.random() * 2) + 1;;
        if (value == 1){
            flip = "heads";
            
        }
        else{
            flip = "tails";
           
        }
        values.push(flip);
        images.push(`<img src="/Coin-Flipper/Coin-Imgs/${flip}.png" alt="Coin ${flip}">`)

    }
    
    coinResult.textContent = ` Coin: ${values.join(", ")}`;
    coinImages.innerHTML = images.join(' ');
}