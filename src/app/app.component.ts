import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,  //描述组件是否需要NgModule
  //当应用为独立应用时，它将使用导入直接管理模板依赖项（组件、指令等）。
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title1 = 'To do application';
  subtitle = 'This is a simple to do application';
  componentTitle = "componentTitle = My To Do List";
//boolean表达式
  filter: "all" | "active" | "done" = "all";
  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
    { description: "study" },
  ];

  get items() {
    if (this.filter === "active") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false
    });
  }

}

