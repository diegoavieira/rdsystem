import { Form, Formik } from 'formik';
import React from 'react';
import RdsFormProps from './RdsForm.props';

/**
 * [RdsForm Examples](https://diegoavieira.github.io/rdsystem/components/rds-form)
 */
const RdsForm = <Values,>({ children, validationSchema, initialValues, onSubmit, onReset }: RdsFormProps<Values>) => {
  return (
    <Formik
      data-testid="rds-form"
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      onReset={onReset}
    >
      <Form autoComplete="off" noValidate>
        {children}
      </Form>
    </Formik>
  );
};

export default RdsForm;
