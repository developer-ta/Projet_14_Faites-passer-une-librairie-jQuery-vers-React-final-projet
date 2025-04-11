export default class employeeService {
  constructor(state, dispatch, model) {
    this._state = state;
    this._dispatch = dispatch;
    this._model = model;
  }
  //new futcher
  addEmployeeToRedux(addAction, newEmployeeData) {
    this._dispatch(addAction({ ...newEmployeeData }));
  }
  getValuesInput(formEvent) {
    formEvent.preventDefault();

    this._model.firstName = formEvent.target.elements[0].value;
    this._model.lastName = formEvent.target.elements[2].value;
    this._model.dateOfBirth = formEvent.target.elements[4].value;
    this._model.startDate = formEvent.target.elements[7].value;
    this._model.street = formEvent.target.elements[11].value;
    this._model.city = formEvent.target.elements[13].value;
    this._model.state = formEvent.target.elements[15].value;
    this._model.zipCode = formEvent.target.elements[19].value;
    this._model.department = formEvent.target.elements[21].value;
   

    return this._model;
  }
  _validateInputText(text) {
    const pattern = /^[A-za-z]+$/;
    const isNoValid = text && pattern.test(text) ? false : true;

    if (isNoValid)
      return {
        isNoValid,
        message:
          "Veuillez vous assurer que le champ ne contient que des lettres, sans chiffres ni caractères spéciaux, et qu'il n'est pas vide.",
      };
    return undefined;
  }
  _validateDate(date) {
    const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const isNoValid = date && pattern.test(date) ? false : true;
    if (isNoValid) return { isNoValid, message: 'Veuillez sélectionner une date' };
    return undefined;
  }
  _validateInputAddress(address) {
    const pattern = /^[A-za-z0-9 ]+$/;
    const isNoValid = address && pattern.test(address) ? false : true;
    if (isNoValid) return { isNoValid, message: 'Veuillez sélectionner une address' };

    return undefined;
  }
  _validateInputZipCode(zipCode) {
    const pattern = /\d{5}/;
    const isNoValid = zipCode && pattern.test(zipCode) ? false : true;
 
    if (isNoValid) {
      return {
        isNoValid,
        message:
          "Veuillez vous assurer que le champ contient au moins 5 chiffres et qu'il ne contient que des chiffres (sans lettres ni caractères spéciaux).",
      };
    }
    return undefined;
  }
  checkInput(newEmployeeData) {
    const ValideFirstNameRes = this._validateInputText(newEmployeeData.firstName) || undefined;
    const ValideLastNameRes = this._validateInputText(newEmployeeData.lastName) || undefined;
    const ValideDateOfBirthRes = this._validateDate(newEmployeeData.dateOfBirth) || undefined;
    const ValideStartDateRes = this._validateDate(newEmployeeData.startDate) || undefined;
    // ValideStateRes = this._validateInputText(newEmployeeData.state) || undefined;
    const ValideStreetRes = this._validateInputAddress(newEmployeeData.street) || undefined;
    const ValideCityRes = this._validateInputText(newEmployeeData.city) || undefined;
    const ValideZipCodeRes = this._validateInputZipCode(newEmployeeData.zipCode) || undefined;
    // ValideDepartmentRes = this._validateInputText(newEmployeeData.department) || undefined;
    if (
      ValideFirstNameRes ||
      ValideLastNameRes ||
      ValideDateOfBirthRes ||
      ValideStartDateRes ||
      ValideStreetRes ||
      ValideCityRes ||
      ValideZipCodeRes
    ) {
      return {
        ValideFirstNameRes,
        ValideLastNameRes,
        ValideDateOfBirthRes,
        ValideStartDateRes,
         ValideStreetRes,
        ValideCityRes,
        ValideZipCodeRes,
      };
    }
    return undefined;
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
