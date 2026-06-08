
   

    function add() {
         var rr=document.querySelector(".rr")
         var ee=document.querySelector(".ee")
        rr.style.display="block"
        ee.style.display="block"
     
        
    }

  
    function del(event){
        event.target.parentElement.remove()
    }

     function canc(){
         var rr=document.querySelector(".rr")
         var ee=document.querySelector(".ee")
        rr.style.display="none"
        ee.style.display="none"

    }

    function nadd()
    {
        var ss=document.querySelector(".ss")
        var ff=document.querySelector(".ff")
        var hh=document.querySelector(".hh")
        var qqq=document.querySelector(".qqq")
        var lll=document.querySelector("#lll")
         var oo=document.querySelector("#oo")
         var zz=document.querySelector("#zz")
         var xx=document.querySelector("#xx")


         var ii=document.querySelectorAll("#ii").value
         var aa=document.querySelector(".aa").value
         var dd=document.querySelector(".dd").value
         var gg=document.querySelector(".gg").value

         var rr=document.querySelector(".rr")
         var ee=document.querySelector(".ee")
        rr.style.display="none"
        ee.style.display="none"



        var div=document.createElement("div")
        


        div.setAttribute("id","ii")
        div.innerHTML=` <h2 id="oo">${ss.value}</h2>
        <h5 id="zz">${ff.value}</h5>
        <h6 id="xx">${hh.value}</h6>
        <button class="uu"  onclick="del(event)">delete</button>
        </div>`
        qqq.append(div)

       
    
    }

   