import React from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { RdsContainer, RdsField } from '@rdsystem/components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// import { Marked } from '@components';

const initialValues = {
  name: '',
  email: ''
};

const validationSchema = Yup.object({
  name: Yup.string().required().min(4),
  email: Yup.string().email().required()
});

const FormPage = () => {
  return (
    <RdsContainer>
      {/* <Marked file="src/docs/components/installation/installation.md" /> */}
      <Card>
        <CardContent>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(values);
              console.log(actions);
            }}
          >
            <Form autoComplete="off" noValidate>
              <RdsField name="name" label="Name" margin="0 0 8px 0" helperText="test" />
              <RdsField name="email" label="Email" />
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </RdsContainer>
  );
};

export default FormPage;
