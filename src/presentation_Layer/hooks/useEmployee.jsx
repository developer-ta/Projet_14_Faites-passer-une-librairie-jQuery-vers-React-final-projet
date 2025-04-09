import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import employeeService from '../../application_Layer/services/employeeService';
import EmployeeProfile from '../../domain_Layer/employee';

export default function useEmployee() {
  const { state } = useLocation();
  const { employeeProfileList } = useSelector((state) => state.employeeProfileReducer);

  const dispatch = useDispatch();
  const profileService = new employeeService(employeeProfileList, dispatch, new EmployeeProfile());

  //   useEffect(() => {
  //     const token = state || profileService.getToken();
  //     if (token) {
  //       const fetchData = async () => {
  //         const res = await getUserAccount(token);
  //         if (res) dispatch(setAccount(res));
  //       };
  //       fetchData();
  //     }
  //   }, []);

  //application layer
  const setProfile = useCallback((e) => {
    const newEmployee = profileService.getValuesInput(e);
    const validationInfo = profileService.checkInput(newEmployee);

    // loginData.passWord = formLoginData.password.value;
    // loginData.email = formLoginData.username.value;
    // loginData.isAuthMemo = formLoginData[2].checked;

    // //check email
    // isInvalidIdentifie = loginService.validateEmail(loginData.email);
    // if (!isInvalidIdentifie || !loginData.email.trim()) {
    //   setMessageInvalidEmail(
    //     'Veuillez saisir une adresse email valide. Le champ ne peut pas être vide et doit respecter le format correct'
    //   );
    //   return;
    // } else if (!loginData.passWord.trim()) {
    //   setMessageInvalidEmail(
    //     'Veuillez saisir une password valide. Le champ ne peut pas être vide !'
    //   );
    //   return;
    // } else {
    //   setMessageInvalidEmail((m) => (m = ''));
    // }

    // // check token
    // const resToken = await loginService.getToken({
    //   email: loginData.email,
    //   password: loginData.passWord,
    // });

    // if (!resToken) {
    //   setMessageInvalideIdentifie(
    //     "L'adresse email ou le mot de passe ne peut pas être vide et doit être correct. Veuillez vérifier vos informations et réessayer."
    //   );
    //   return;
    // } else {
    //   loginData.token = resToken.body.token;
    //   dispatch(setLogin({ ...loginData }));
    //   setMessageInvalideIdentifie((m) => (m = ''));
    //   loginService.toProfilePage(navigate, loginData.token);
    // }
    // if (loginData.isAuthMemo) {
    //   loginService.persistToken(loginData.token);
    // }
  }, []);

  return {
    setProfile,
  };
}
