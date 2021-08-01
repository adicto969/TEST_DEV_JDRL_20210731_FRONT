import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonCrudComponent } from '../dialogs/person-crud/person-crud.component';
import { AppMatSidenavHelperDirective } from '../directives/app-mat-sidenav-helper.directive';
import { MatSidenavTogglerDirective } from '../directives/mat-sidenav-toggler.directive';
import { MatSidenavHelperService } from '../services/mat-sidenav-helper.service';
import { MatchMediaService } from '../services/match-media.service';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        MatSidenavTogglerDirective,
        AppMatSidenavHelperDirective,
        PersonCrudComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MaterialModule,
        MatSidenavTogglerDirective,
        AppMatSidenavHelperDirective,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        MatSidenavHelperService,
        MatchMediaService,
        FormsModule
    ],
    entryComponents: [
        PersonCrudComponent
    ]
})
export class SharedModule {}
