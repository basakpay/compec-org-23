import { YonetimInfo } from './yonetim_info.js'; 
console.log("Loading Yonetim Info: ", YonetimInfo.YK)


let yk_kart = document.getElementById("yk_kart");
let lider_kart = document.getElementById("lider_kart");
lider_kart.style.display = "none";



YonetimInfo.YK.forEach((person) => {
    let personCard = document.createElement("div");
    personCard.innerHTML = `
				    <a class="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href=${person.linkedin || "#"} style="color: #1a5ea9;">
					<div class="frontside">
					<div class="card shadow" >
						<div class="card-body text-center">
							<p><img class= "img-fluid" src=${person.foto} alt="Yönetim" /></p>
							<h4 class="card-title">${person.isim}</h4>
							<p class="card-text"><b>${person.gorev}</b></p>
						</div>
					</div>
				</div>
				</a>
				
				
    `
    yk_kart.appendChild(personCard);
})

YonetimInfo.Liderler.forEach((person) => {
    let personCard = document.createElement("div");
    personCard.innerHTML = `
        <div class="image-flip" >
			<div class="mainflip flip-0">
				<div class="frontside">
					<div class="card shadow" >
						<div class="card-body text-center">
							<p><img class=" img-fluid" src=${person.foto} alt="Yönetim" /></p>
							<h4 class="card-title">${person.isim}</h4>
							<p class="card-text"><b>${person.gorev}</b></p>
						</div>
					</div>
				</div>
				<div class="backside">
					<div class="card">
						<div class="card-body text-center mt-4">
							<h4 class="card-title">${person.isim}</h4>
							<p class="card-text"><b>${person.gorev}</b></p>
							<ul class="list-inline">
								<li class="list-inline-item">
									<a class="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href=${person.linkedin || "#"} style="color: #1a5ea9;">
										<i class="fa fa-linkedin"></i>
									</a>
								</li>
								<li class="list-inline-item">
									<a class="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href=${person.insta || "#"} style="color: #8a3ab9;">
									    <i class="fa fa-instagram"></i>
									</a>
								<li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    `
    lider_kart.appendChild(personCard);
})


$("head").append('<link rel="stylesheet" href="css/yonetim.css">');

