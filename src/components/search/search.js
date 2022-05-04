const api = () =>{

    const input = document.querySelector(".input");
    if(input.value === ""){
        alert("Error");

    }else{
        const pegar = async(ip) =>{
            let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_tFZ7ko3uARm7jWZ8csxSRrlhgldBT&ipAddress=${ip}`;
    
            const requeriIp = await fetch(url,{})
            .then(response => response.json())
            .then((data) =>{

                document.querySelector(".Conteudo").innerHTML = `<div> <span>Ip address</span><h3>${data.ip}</h3></div>
                 <div><span>Location</span><h3>${data.location.city}</h3></div> 
                 <div><span>Timezone</span><h3>${data.location.timezone}</h3></div> 
                 <div> <span>Isp</span><h3>${data.isp}</h3></div>`;
        
            })
            .catch(erro => erro)
        }
        pegar(input.value);
    }

}

export default api;