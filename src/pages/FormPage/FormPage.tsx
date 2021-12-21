import React from 'react';
import { Box, Button, Card, CardContent } from '@material-ui/core';
import { RdsContainer, RdsField, RdsForm } from '@rdsystem/components';
import * as Yup from 'yup';
// import { Marked } from '@components';

const initialValues = {
  name: '',
  email: '',
  date: new Date()
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required').min(4, 'Minimum 4 characters'),
  email: Yup.string().email('Format invalid').required('Required'),
  date: Yup.date()
    .typeError('Format invalid')
    .min(new Date().toDateString(), 'Minimum date is today')
    .required('Required'),
  time: Yup.date().typeError('Format invalid').required('Required')
});

const FormPage = () => {
  return (
    <RdsContainer>
      {/* <Marked file="src/docs/components/installation/installation.md" /> */}
      <Card>
        <CardContent>
          <RdsForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(JSON.stringify(values, null, 2));
              console.log(actions);
            }}
          >
            <RdsField name="name" label="Name" margin="0 0 8px 0" helperText="Helper text" required />
            <RdsField
              name="email"
              label="Email"
              margin="0 0 8px 0"
              required
              helperText={
                <span>
                  <a href="#">Helper text click</a>
                </span>
              }
            />

            <RdsField name="date" datepicker label="Date" required minDate={new Date()} margin="0 16px 8px 0" />
            <RdsField name="time" timepicker label="Time" required minDate={new Date()} margin="0 0 8px 0" />

            <Box>
              <Button type="submit">Submit</Button>
              <Button type="reset">Reset</Button>
            </Box>
          </RdsForm>
        </CardContent>
      </Card>
    </RdsContainer>
  );
};

export default FormPage;
