import { Component, OnInit } from '@angular/core';
import {IBook} from '../i-book';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  postList: IBook[] = [];
  postForm: FormGroup;
  message: string;
  constructor(private postService: BookService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: '',
      author: '',
    description: ''});
  }
  onSubmit() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.message = 'Tao thanh cong';
      this.postService.createPost(value)
        .subscribe(next => {
          this.postList.unshift(next);
          this.postForm.reset({
            title: '',
            author: '',
            description: ''
          });
        }, error => console.log(error));
    }
  }

}
