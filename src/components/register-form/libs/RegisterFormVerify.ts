export default abstract class RegisterFormVerify {
  private static formIsValid = false;

  private static emailIsInvalid() {
    const emailInput = document.querySelector('#email-input') as HTMLInputElement;

    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
      return false;
    }

    return true;
  }

  private static userIsInvalid() {
    const userInput = document.querySelector('#user-input') as HTMLInputElement;

    if (userInput?.value.length < 8 || userInput?.value.length > 18) {
      return true;
    }

    return false;
  }

  private static passwordIsInvalid() {
    const passwordInput = document.querySelector('#password-input') as HTMLInputElement;

    if (passwordInput?.value.length < 8 || passwordInput?.value.length > 25) {
      return true;
    }

    return false;
  }

  private static passwordIsNotEqual() {
    const passwordInput = document.querySelector('#password-input') as HTMLInputElement;
    const passwordConfirmInput = document.querySelector('#password-equal-input') as HTMLInputElement;

    if (passwordInput?.value !== passwordConfirmInput?.value) {
      return true;
    }

    return false;
  }

  private static UpdatePage() {
    if (this.userIsInvalid()) {
      const lengthErrorBox = document.querySelector('#user-length-error');
      lengthErrorBox?.classList.remove('hidden');
    } else {
      const lengthErrorBox = document.querySelector('#user-length-error');
      lengthErrorBox?.classList.add('hidden');
    }

    if (this.emailIsInvalid()) {
      const invalidEmailErrorBox = document.querySelector('#invalid-email-error');
      invalidEmailErrorBox?.classList.remove('hidden');
    } else {
      const invalidEmailErrorBox = document.querySelector('#invalid-email-error');
      invalidEmailErrorBox?.classList.add('hidden');
    }

    if (this.passwordIsInvalid()) {
      const passwordErrorBox = document.querySelector('#short-password-error');
      passwordErrorBox?.classList.remove('hidden');
    } else {
      const passwordErrorBox = document.querySelector('#short-password-error');
      passwordErrorBox?.classList.add('hidden');
    }

    if (this.passwordIsNotEqual()) {
      const passwordEqualErrorBox = document.querySelector('#not-equal-password-error');
      passwordEqualErrorBox?.classList.remove('hidden');
    } else {
      const passwordEqualErrorBox = document.querySelector('#not-equal-password-error');
      passwordEqualErrorBox?.classList.add('hidden');
    }
  }

  static ValidateForm() {
    if (!this.userIsInvalid() && !this.emailIsInvalid() && !this.passwordIsInvalid() && this.passwordIsNotEqual()) {
      this.formIsValid = true;
    }

    this.UpdatePage();

    return this.formIsValid;
  }
}
