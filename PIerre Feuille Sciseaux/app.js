const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const cisor = document.querySelector('.cisor')
 
const Pvid = document.querySelector('.Pvid')
const Cvid = document.querySelector('.Cvid')

 const PscoreSpan = document.querySelector('.Pscore')
 const CscoreSpan = document.querySelector('.Cscore')
 let pScore = 0
 let cScore = 0

 const videos_option =['rock','paper','cisor']
 const videos_option1 =['pierre-joueur','papier-joueur','ciseaux-joueur']
 const videos_option2 =['pierre-ordi','papier-ordi','ciseaux-ordi']
 const Pchoice = (i) =>{
 	Pvid.src = 'assets/'+videos_option1[i]+'.mp4'
 	Pvid.value =videos_option[i]
 	compareHands()
 }
  const Cchoice = (i) =>{
 	Cvid.src = 'assets/'+videos_option2[i]+'.mp4'
 	Cvid.value =videos_option[i]

 }

 rock.addEventListener('click',() =>{
 	Cchoice(Math.floor(Math.random() *3 ))
 	Pchoice(0)
 })
 paper.addEventListener('click',() =>{
 	Cchoice(Math.floor(Math.random() * 3))
 	Pchoice(1)	
 })
cisor.addEventListener('click',() =>{
 	Cchoice(Math.floor(Math.random() * 3))
 	Pchoice(2)
 })


const compareHands = () =>{
	if (Pvid.value == 'rock'){
		if  (Cvid.value == 'cisor'){
		pScore+=1
	}
		else if (Cvid.value== 'paper') {
		cScore+=1
	}
		else if (Cvid.value == 'rock') {}
    }
   else if (Pvid.value == 'paper'){
		if  (Cvid.value == 'rock'){
		pScore+=1
	    }
		else if (Cvid.value== 'cisor') {
		cScore+=1
	    }
		else if (Cvid.value == 'paper') {}
    }
	else if (Pvid.value == 'cisor'){
		if  (Cvid.value == 'paper'){
		pScore+=1
	    }
		else if (Cvid.value== 'rock') {
		cScore+=1
	    }
		else if (Cvid.value == 'paper') {}
			
	}

PscoreSpan.textContent = pScore
CscoreSpan.textContent = cScore
}
