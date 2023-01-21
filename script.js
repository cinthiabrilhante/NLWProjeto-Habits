// variavel para receber o formulario //
const form = document.querySelector('#form-habits')
//criamos um objeto com essa biblioteca chamada  nlwsetup//
// a biblioteca precisa de um formulario para funcionar form//
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//registrou memoria ouvir a funçao de click//
button.addEventListener('click', add)
form.addEventListener("change", save)


//agrupar codigos , quando clicar no botao ela vai rodar a funcao//
function add() {
   const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
   const dayExists = nlwSetup.dayExists(today)

   if (dayExists) {
    alert("Dia já incluso")
    return
   }

  alert('Adicionado com sucesso')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify 
  (nlwSetup.data))
}

 
 const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
 nlwSetup.setData(data)
 nlwSetup.load()