import { Routes } from '@angular/router';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { TemplateDrivenForms } from './template-driven-forms/template-driven-forms';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path:'',
        component:ReactiveForms
    },
    {
        path:'template',
        component:TemplateDrivenForms
    },
    {
        path:'**',
        component:NotFound
    }
];
