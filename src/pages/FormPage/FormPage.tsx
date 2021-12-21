import React from 'react';
import { Box, Button, Card, CardContent } from '@material-ui/core';
import { RdsContainer, RdsField, RdsForm } from '@rdsystem/components';
import * as Yup from 'yup';
// import { Marked } from '@components';

const initialValues = {
  name: '',
  email: '',
  date: new Date(),
  time: new Date(),
  multiline: '',
  number: 2
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required').min(4, 'Minimum 4 characters'),
  email: Yup.string().email('Format invalid').required('Required'),
  date: Yup.date()
    .typeError('Format invalid')
    .min(new Date().toDateString(), 'Minimum date is today')
    .nullable()
    .required('Required'),
  time: Yup.date().nullable().required('Required')
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
            <Box display="flex" flexDirection="column" alignItems="start">
              <RdsField name="name" label="Name" margin="0 0 8px 0" helperText="Helper text" required />
              <RdsField
                name="email"
                label="Email"
                margin="0 0 8px 0"
                width="100%"
                required
                helperText={
                  <span>
                    <a href="#">Helper text click</a>
                  </span>
                }
              />
              <RdsField name="date" datepicker label="Date" required minDate={new Date()} margin="0 16px 8px 0" />
              <RdsField name="time" timepicker label="Time" required margin="0 0 8px 0" />
              <RdsField name="multiline" multiline label="Multiline" margin="0 0 8px 0" />
              <RdsField name="number" type="number" label="Number" margin="0 0 8px 0" />
            </Box>
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
