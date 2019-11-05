import { Component, OnInit } from '@angular/core';
import {IBook} from '../i-book';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  content: IBook;
  data: FormGroup;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private contentService: BookService) { }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      title: '',
      author: '',
      description: ''
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getById(id).subscribe(
      next => {
        this.content = next;
        this.data.patchValue(this.content);
      },
      error => {
        this.content = null;
      }
    );
  }
  editContent() {
    this.contentService.updatePost(this.data.value).subscribe(next => {
      this.message = 'Update success';
    });
  }
}
