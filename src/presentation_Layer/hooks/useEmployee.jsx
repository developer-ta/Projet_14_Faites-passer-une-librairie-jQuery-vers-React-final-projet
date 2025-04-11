import { useCallback, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import employeeService from '../../application_Layer/services/employeeService';
import EmployeeProfile from '../../domain_Layer/employee';
import { addEmployee } from '../../infrastructure_Layer/redux/slices/employee/employeeProfile';

export default function useEmployee() {
  const { employeeProfile } = useSelector((state) => state.employeeProfileReducer);

  const [errorValidation, setErrorValidation] = useState({});

  const dispatch = useDispatch();

  const profileService = useMemo(() => {
    return new employeeService(employeeProfile, dispatch, new EmployeeProfile());
  }, [dispatch, employeeProfile]);

  //application layer
  const setProfile = useCallback(
    (e) => {
      const newEmployee = profileService.getValuesInput(e);
      const errorValidationInfo = profileService.checkInput(newEmployee);

      if (errorValidationInfo) {
        setErrorValidation({ ...errorValidationInfo });

        return;
      } else {
        
        profileService.addEmployeeToRedux(addEmployee, newEmployee);
      }
    },
    [profileService]
  );

  return {
    setProfile,
    ...errorValidation,
  };
}
