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
  getValuesInput(formEvent) {
    formEvent.preventDefault();

    this._model.firstName = formEvent.target.elements[0].value;
    this._model.lastName = formEvent.target.elements[2].value;
    this._model.dateOfBirth = formEvent.target.elements[4].value;
    this._model.startDate = formEvent.target.elements[7].value;
    this._model.street = formEvent.target.elements[11].value;
    this._model.City = formEvent.target.elements[13].value;
    this._model.state = formEvent.target.elements[15].value;
    this._model.zipCode = formEvent.target.elements[19].value;
    this._model.department = formEvent.target.elements[20].value;

    return this._model;
  }
  _validateInputText(text) {
    const pattern = /[A-za-z]/;
    const isValid = text && pattern.test(text) ? true : false;
    if (isValid)
      return {
        isValid,
        message:
          "Veuillez vous assurer que le champ ne contient que des lettres, sans chiffres ni caractères spéciaux, et qu'il n'est pas vide.",
      };
    return undefined;
  }
  _validateDate(date) {
    const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const isValid = date && pattern.test(date) ? true : false;
    if (isValid) return { isValid, message: 'Veuillez sélectionner une date' };
    return undefined;
  }
  _validateInputAddress(address) {
    const pattern = /[A-za-z0-9]/;
    const isValid = date && pattern.test(email) ? true : false;
    if (isValid) return { isValid, message: 'Veuillez sélectionner une address' };
    return undefined;
  }
  _validateInputZipCode(zipCode) {
    const pattern = /[0-9]\d{5}/;
    const isValid = date && pattern.test(email) ? true : false;
    if (isValid) {
      return {
        isValid,
        message:
          'Assurez-vous que le champ est rempli uniquement avec des nombres, sans lettres ni caractères spéciaux  ni doit pas être vide',
      };
    }
    return undefined;
  }
  checkInput(newEmployeeData) {
    let ValideInputResponse;
    ValideFirstNameRes = this._validateInputText(newEmployeeData.firstName) || undefined;
    ValideLastNameRes = this._validateInputText(newEmployeeData.lastName) || undefined;
    ValideDateOfBirthRes = this._validateDate(newEmployeeData.dateOfBirth) || undefined;
    ValideStartDateRes = this._validateInputText(newEmployeeData.startDate) || undefined;
    ValideFirstNameRes = this._validateInputText(newEmployeeData.firstName) || undefined;
    ValideFirstNameRes = this._validateInputText(newEmployeeData.firstName) || undefined;

    return isValideInput;
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
