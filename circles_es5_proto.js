function Circles(count){
    this.count = count;

    Circles.prototype.drawCircles = function(){
        for(let x = 1; x <= this.count; x++){
            const div = document.createElement("div");
            let top = Math.floor(Math.random() * (1080 - 0 + 1)) + 0;
            let left = Math.floor(Math.random() * (1920 - 0 + 1)) + 0;
            let size = Math.floor(Math.random() * (10 - 50 + 1)) + 50;
            const codes = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
            let color = '#';
            for(let y = 0; y < 6; y++){
                let code = Math.floor((Math.random()*16))
                color += codes[code]; 
            }

            div.style.backgroundColor = color;
            div.style.position = "absolute";
            div.style.borderRadius = "50%";
    
            const drawCircle = setInterval(function(){
                size++;
                div.style.top = `${top - size / 2}px`;
                div.style.left = `${left - size / 2}px`;
                div.style.width = `${size}px`;
                div.style.height = `${size}px`;
    
                if(size == 300){
                    clearInterval(drawCircle);
                    div.remove();
                }
            }, 20);
    
            canvas.append(div);
        }
    }
}