import {
  bootstrap,
  Component,
  FORM_DIRECTIVES,
  CORE_DIRECTIVES

} from 'angular2/angular2';

import Navbar from './navbar';
import BLEditor from './bl-editor';
import StyleEditor from './style-editor';

@Component({
  selector: 'ffa',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, Navbar, BLEditor, StyleEditor],
  templateUrl: 'app/partials/ffa.html'
})

class AppComponent {
  public page   = 'welcome';
  onPageChange(page:string) {
    this.page = page;
    console.log('app: '+page);
  }
}

bootstrap(AppComponent);