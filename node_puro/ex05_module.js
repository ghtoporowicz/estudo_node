console.log('O global aponta para o this? ' + (global === this))
console.log('O module aponta para o this? ' + (module === this))
console.log('O module.exports aponta para o this? ' + (module.exports === this))

this.digaOi = function() {
    console.log('Oi!!!')
}