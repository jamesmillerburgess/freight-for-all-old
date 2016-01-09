import {
  bootstrap,
  Component,
  FORM_DIRECTIVES,
  CORE_DIRECTIVES
} from 'angular2/angular2';

import {
  Http,
  HTTP_PROVIDERS
} from 'angular2/http';

import BLEditor from './bl-editor';
import StyleEditor from './style-editor';
import SignUp from './sign-up';

@Component({
  selector: 'ffa',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, BLEditor, StyleEditor, SignUp],
  templateUrl: 'app/html/ffa.html'
})

class AppComponent {
  public page   = 'welcome';
  onPageChange(page:string) {
    this.page = page;
    console.log('app: '+page);
  }
}

bootstrap(AppComponent, HTTP_PROVIDERS);