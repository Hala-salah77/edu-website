import { enableProdMode} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var $:any;
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

$('#myModal').modal('toggle');
$('#myModal2').modal('toggle');
$('#myModal3').modal('toggle');
$('#myModal4').modal('toggle');
$('#myModal5').modal('toggle');
$('#myModal6').modal('toggle');
$('#myModal7').modal('toggle');
$('#myModal8').modal('toggle');
$('#deleteGroup').modal('toggle');
$('#myModal10').modal('toggle');
$('#myModal11').modal('toggle');
$('#deleteExam').modal('toggle');
$('#deleteQuestion').modal('toggle')

