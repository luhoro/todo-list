const Main = {

   //objeto de inicialização do programa
   init: function () {
      this.cacheSelectors()
      this.bindEvents()
   },

   //selecionar e armazenar os elementos html
   cacheSelectors: function () {
      this.$checkButton = document.querySelectorAll('.check')
      this.$inputTask = document.querySelector('#inputTask')
      this.$list = document.querySelector('#list')
      this.$removeButtons = document.querySelectorAll('.remove')
      this.$buttonDarkMode = document.querySelector('#button')
      this.$imageDarkMode = document.querySelector('.img')
   },

   //adicionar eventos de clique
   bindEvents: function (){
      const self = this

      this.$checkButton.forEach(function(button) {
         button.onclick = self.Events.checkButton_click
      })

      this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

      this.$removeButtons.forEach(function(button) {
         button.onclick = self.Events.removeButton_click
      })

      this.$buttonDarkMode.onclick = self.Events.buttonDarkMode_click.bind(this)
   
   },


   Events: {
      checkButton_click: function(e){
         const li = e.target.parentElement

         li.classList.toggle('done')
      },
 
      inputTask_keypress: function(e){ 
         const key = e.key
         const value = e.target.value

         if (key === 'Enter') {
            this.$list.innerHTML += `
            <li>
               <div class="check"> </div>
               <p class="task"> 
               ${value} 
               </p>
               <button class="remove"> </button>
            </li>
            `

            e.target.value = ''

            this.cacheSelectors()
            this.bindEvents()
         }
      },

      removeButton_click: function (e) {
         let li = e.target.parentElement

         li.classList.add('removed')

         setTimeout(function(){
            li.classList.add('hidden')
         }, 300)
      },

      buttonDarkMode_click: function (e) {
         let image = e.target
         let body = image.offsetParent

         if (body.classList == 'darkmode') {
            image.setAttribute('src', './images/moon.svg')
            body.classList.remove('darkmode')
         } else {
            image.setAttribute('src', './images/sun.svg')
            body.classList.add('darkmode')
         }
      }

   }

}

Main.init()