export default ()=>({
  open: false,
  toggle() {
    this.open = !this.open;
    if (this.open) {
      this.$el.previousElementSibling.style.height = this.$el.previousElementSibling.children[0].clientHeight + 'px';
      this.$el.innerText = '-';
    } else {
      this.$el.previousElementSibling.style.height = 45 + 'px';
      this.$el.innerText = '+';
    }
  }
})