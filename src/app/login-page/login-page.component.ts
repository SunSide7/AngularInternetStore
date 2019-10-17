import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {DialogModalService} from '../shared/services/dialog-modal.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.sass'],
    providers: [DialogModalService]
})
export class LoginPageComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;

    constructor(
      private auth: AuthService,
      private dialogService: DialogModalService,
    ) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(7)
            ]),
        });
    }

    submit() {
        if (this.form.invalid) {
            return;
        }

        const user: User = {
            email: this.form.value.email,
            password: this.form.value.password,
        };

        this.submitted = true;

        this.dialogService.showMessage('Login Page Btn Submit');

    }

}
