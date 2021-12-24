/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikHelpers } from 'formik';

export default interface RdsFormProps<Values> {
  /**
   * Children.
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Initial values.
   */
  initialValues: Values;
  /**
   * A Yup Schema or a function that returns a Yup schema
   */
  validationSchema?: any | (() => any);
  /**
   * OnSubmit.
   */
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
  /**
   * OnReset.
   */
  onReset?: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
}
