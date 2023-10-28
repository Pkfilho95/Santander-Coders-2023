import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { StatusFormatPipe } from './pipes/status-format.pipe';
import { TaskLogsComponent } from './components/task-logs/task-logs.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskFormComponent,
    TaskListComponent,
    FooterComponent,
    TaskDetailComponent,
    StatusFormatPipe,
    TaskLogsComponent,
    DateGreaterThanTodayDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
