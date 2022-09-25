import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent  {
  title: string = "We love Angular!"
  content: string = "We are learning Angular with CodeLabs."

  isTechRelated: boolean = true;

}
