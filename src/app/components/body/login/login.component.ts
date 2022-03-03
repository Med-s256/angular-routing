import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pass!: string;
  mail!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
