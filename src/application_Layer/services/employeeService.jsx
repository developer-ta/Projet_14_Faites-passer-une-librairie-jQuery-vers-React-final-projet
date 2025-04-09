export default class employeeService {
  constructor(state, dispatch, model) {
    this._state = state;
    this._dispatch = dispatch;
    this._model = model;
  }
  //new futcher
  addEmployeeToRedux(AddAction, formEvent) {
    formEvent.preventDefault();
    const formData = formEvent.target.elements;
    console.log('formData: ', formData);
  }

  _validateInputText(text) {
    const pattern = /[A-za-z]/;
    const isValid = text && pattern.test(text) ? true : false;
    return {
      isValid,
      message:
        "Veuillez vous assurer que le champ ne contient que des lettres, sans chiffres ni caractères spéciaux, et qu'il n'est pas vide.",
    };
  }
  _validateDate(date) {
    const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const isValid = date && pattern.test(date) ? true : false;
    return { isValid, message: 'Veuillez sélectionner une date' };
  }
  _validateInputAddress(address) {
    const pattern = /[A-za-z0-9]/;
    const isValid = date && pattern.test(email) ? true : false;
    return { isValid, message: 'Veuillez sélectionner une address' };
  }
  _validateInputAddress(zipCode) {
    const pattern = /[0-9]\d{5}/;
    const isValid = date && pattern.test(email) ? true : false;
    return {
      isValid,
      message:
        'Assurez-vous que le champ est rempli uniquement avec des nombres, sans lettres ni caractères spéciaux  ni doit pas être vide',
    };
  }
  _checkEmptyOrUndefined() {
    throw new Error();
  }
  validateEmail(email) {
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const isValid = pattern.test(email);
    return isValid;
  }
  async getProfileData(token) {
    const { body } = await this._userProfileRepo.postUserToken(token);

    return body;
  }

  getToken() {
    const token = localStorage.getItem('authToken');
    return token;
  }

  async updateProfile(token, data) {
    if (token) {
      const res = await this._userProfileRepo.putUserProfile(token, data);

      return res.body;
    }
  }

  redirectionToLogin(navigate) {
    navigate('/login');
  }
}
