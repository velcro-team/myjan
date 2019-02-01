import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import{ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { BuiltinPipesComponentComponent } from './builtin-pipes-component/builtin-pipes-component.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BuiltinPipesComponentComponent,
    CustomPipePipe,
    ChildComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
