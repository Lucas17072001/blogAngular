import { PostTemaComponent } from './post-tema/post-tema.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoguinComponent } from './loguin/loguin.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "feed", component: FeedComponent},
  {path: "loguin", component: LoguinComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "cadastro-tema", component: PostTemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

