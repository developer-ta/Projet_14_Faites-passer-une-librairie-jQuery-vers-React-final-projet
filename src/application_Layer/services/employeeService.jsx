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

  validateInputText() {}
  _checkEmptyOrUndefined() {}

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
