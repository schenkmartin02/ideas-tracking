import { Component } from '@angular/core';
import {Idea} from "../models/idea.model";
import {IdeasService} from "../ideas.service";

@Component({
  selector: 'app-list-ideas',
  templateUrl: './list-ideas.component.html',
  styleUrls: ['./list-ideas.component.scss']
})
export class ListIdeasComponent {
  ideas: Idea[] = [];

  constructor(private ideasService: IdeasService) {
  }

  ngOnInit() {
    this.listIdeas();
  }

  listIdeas() {
    this.ideasService.listIdeas().subscribe(ideas => this.ideas = ideas);
  }

  upvote(idea: Idea) {
    this.ideasService.upvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  downvote(idea: Idea) {
    this.ideasService.downvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  delete(idea: Idea) {
    this.ideasService.deleteIdea(idea).subscribe(_ => this.listIdeas());
  }
}
