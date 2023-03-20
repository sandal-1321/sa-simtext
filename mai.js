let div=document.createElement("div");
let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");
let area=document.createElement("textarea");
let but=document.createElement("button");
let ul=document.createElement("ul");

 /*append*/
div.append(div1);
div.append(div2);
div1.append(area);
div1.append(but);
div2.append(ul);
div2.append(div3);



area.type="text";
area.setAttribute("id","text");
area.placeholder="Feedback";
but.textContent="POST";
console.log(div);
but.addEventListener("click",()=>{
ul.innerHTML+=`<li class="outer2" style="font-size:20px;margin:20px;background-color:white;padding:10px;border-radius:30px;min-width:55%;">${text.value}</li>`;
});
document.body.append(div);
ul.setAttribute("style","border-radius:10px;box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);list-style: none;display: flex;border:none;justify-space-center: center;align-items: center;flex-direction: column; background-color:lightblue;width:560px;margin-left:400px")
div1.setAttribute("style","border-radius:10px;box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);display: flex;border:none;justify-content:space-around;align-items:center;height:200px;background-color:lightblue;width:600px;margin-left:400px");
but.setAttribute("style","margin-top:30px;font-size:20px;font-weight:bold;padding:15px 40px;background-color:white;margin-top:-2px;margin-right:30px;border:none;border-radius:10px;");
area.setAttribute("style","width:60%;hight:40px;font-size:20px;border-radius:10px;padding:5px 10px;border:none;margin-left:30px;");
 div2.setAttribute("style","display: flex;");
