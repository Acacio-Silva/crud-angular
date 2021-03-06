import { User } from './../user.model';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user : User ={
    name:'',
    cpf: 0
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void{
    this.userService.createUser(this.user).subscribe(()=>{
      this.userService.showMessage("Usuário adicionado com Sucesso");
      this.router.navigate(["/users"]);  
    });   
  }

  cancel() : void{
    this.router.navigate(["/users"]);
  }
}
