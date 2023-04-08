
const Main = {

   //objeto de inicialização do programa
   init: function () {
      this.cacheSelectors()
      this.bindEvents()
   },

   //selecionar e armazenar os elementos html
   cacheSelectors: function () {
      this.$checkButton = document.querySelectorAll('.check')
   },

   //adicionar eventos de clique
   bindEvents: function (){
      const self = this

      this.$checkButton.forEach(function(button) {
         button.onclick = self.Events.checkButton_click
      })
   },


   Events: {
      checkButton_click: function(e){
         const li = e.target.parentElement
         const isDone = li.classList.contains('done')

         if (!isDone){
            return li.classList.add('done')
         }
         li.classList.remove('done')
      }
 



   }

}

Main.init()