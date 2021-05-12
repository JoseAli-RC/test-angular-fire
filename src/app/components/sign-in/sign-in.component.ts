import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/service/ng-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public ngAuthService: NgAuthService
  ) { }
  ngOnInit(): void {
  }

}
