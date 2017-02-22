import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { SessionService } from '../shared/session.service';
import { MessageComponent } from '../global-message/message.component';
import { MessageService } from '../global-message/message.service';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    MessageComponent
  ],
  exports: [
    CoreModule,
    MessageComponent
  ],
  providers: [SessionService, MessageService]
})
export class SharedModule {

}