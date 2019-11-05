import { Component, OnInit } from '@angular/core';
import {IBook} from '../i-book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  output: IBook[];
  info: IBook;
  constructor(private bookService: BookService) {
    this.bookService.getContents().subscribe(next =>{
      this.output = next;
    });
  }

  ngOnInit() {
  }

}
