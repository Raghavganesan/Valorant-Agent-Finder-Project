let inpt = document.querySelector(".agent");
        let b1 = document.querySelector(".btn");
        let d1 = document.querySelector(".cont");
        let theme = document.querySelector(".themee");
        let bod = document.querySelector("body");


        theme.addEventListener("click",function(){
            bod.classList.toggle("blacktheme");

        })



        async function SearchAgent(){
            try{
                const response = await fetch("https://valorant-api.com/v1/agents");
                if(!response.ok){
                    throw new Error("API failed");
                }
                const data = await response.json();

                const agents = data.data;

                const agent = agents.find(a => {

                    return a.displayName.toLowerCase() == inpt.value.toLowerCase();
                   
                })
                 console.log(agent);

                 if(agent){
                    d1.innerHTML ="";
                    let img = document.createElement("img");
                    img.src = agent.fullPortrait || agent.displayIcon;
                    img.alt = agent.displayName;
                    img.style.width = "300px";

                    let name = document.createElement("h3");
                    name.textContent = agent.displayName;

                    let agent_para = document.createElement("p");
                    agent_para.textContent = agent.description;


                    d1.appendChild(name);
                    d1.appendChild(img);
                    d1.appendChild(agent_para);
                 }
                 else{
                    d1.textContent = "Agent Not Found!!"
                 }
                
            }
            catch(error){
                console.error(error);
            }

        }