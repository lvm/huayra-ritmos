export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('pattern'),
    this.use('fade'),
    this.reverse('fade')
  );


  this.transition(
    this.fromRoute('index'),
    this.toRoute('playground'),
    this.use('fade'),
    this.reverse('fade')
  );
}
