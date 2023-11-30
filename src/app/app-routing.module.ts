import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddblocComponent} from "./bloc/addbloc/addbloc.component";
import {UpdateblocComponent} from "./bloc/updatebloc/updatebloc.component";
import {DeleteblocComponent} from "./bloc/deletebloc/deletebloc.component";
import {ListblocsComponent} from "./bloc/listblocs/listblocs.component";

const routes: Routes = [
  {path: 'addbloc', component: AddblocComponent},
  {path:'updatebloc/:id', component: UpdateblocComponent},
  {path: 'listblocs', component: ListblocsComponent},
  {path: 'deletebloc', component: DeleteblocComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
