AFRAME.registerComponent("carmovement",{
    intit:function(){
      this.run();
    },

    run: function(){
        var car = document.querySelector("#Car")
        window.addEventListener("keydown",(e) => {
          if(
                e.key === "ArrowUp" ||
                e.key === "ArrowRight" ||
                e.key === "ArrowLeft"  ||
                e.key === "ArrowDown"
           ){
                console.log("hi")
               

            }
        
        })

    }
})