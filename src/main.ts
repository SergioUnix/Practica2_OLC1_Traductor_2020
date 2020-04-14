import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import 'codemirror/mode/javascript/javascript';  //necesario para codeMirror
import 'codemirror/mode/markdown/markdown';      //necesario para codeMirror
import 'codemirror/mode/go/go';      //necesario para codeMirror
import 'codemirror/mode/javascript/javascript';      //necesario para codeMirror
import 'codemirror/mode/python/python';      //necesario para codeMirror



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
