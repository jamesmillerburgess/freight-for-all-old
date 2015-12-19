import { Component, Output, Observable, EventEmitter } from 'angular2/angular2';

@Component({
  selector: 'navbar',
  templateUrl: 'app/partials/navbar.html',
  events: ['page']
})

class Navbar {
  public page:EventEmitter = new EventEmitter();
  changePage(newPage:string) {
    console.log('navbar:'+newPage);
    this.page.next(newPage)
  }
}

export default Navbar;
