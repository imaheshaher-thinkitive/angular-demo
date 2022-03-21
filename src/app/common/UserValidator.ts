import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserValidator {
    static canNotContainSpace(control:AbstractControl):ValidationErrors | null {
        if((control.value as string).indexOf(' ')>=0){
            return {canNotContainSpace:true}
        }
        return null
    }
    // checking username is unique
    static usernameShouldBeUnique(control:AbstractControl):Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                if(control.value=='mahesh') {
                    resolve({usernameShouldBeUnique:true})
                }
                else resolve(null)
            },2000)
        })
       
    }
}