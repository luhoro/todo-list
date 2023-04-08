
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
            console.log(this)
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
      }

   }

}

Main.init()