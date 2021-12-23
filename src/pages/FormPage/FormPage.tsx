import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent } from '@material-ui/core';
import { RdsContainer, RdsField, RdsForm } from '@rdsystem/components';
import * as Yup from 'yup';
import { RdsOptionProps } from '@rdsystem/components/RdsField/RdsField.props';
import useSWR from 'swr';
import axios from 'axios';
// import { Marked } from '@components';

const initialValues = {
  name: '',
  email: '',
  date: new Date(),
  time: new Date(),
  multiline: '',
  number: 2,
  select: null,
  multiple: [{ key: 'test4', primary: 'Test4' }]
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required').min(4, 'Minimum 4 characters'),
  email: Yup.string().email('Format invalid').required('Required'),
  date: Yup.date()
    .typeError('Format invalid')
    .min(new Date().toDateString(), 'Minimum date is today')
    .nullable()
    .required('Required'),
  time: Yup.date().nullable().required('Required'),
  select: Yup.object().nullable().required('Required'),
  multiple: Yup.array().required('Required')
});

const options: RdsOptionProps[] = [
  {
    key: 'test4',
    primary: 'Test4'
  },
  {
    key: 'test2',
    primary: 'Test2',
    secondary: 'secondary'
  },
  {
    key: 'test',
    primary: 'Test'
  }
];

const filterValues = {
  selected: null,
  selecteds: []
};

interface DateProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const FormPage = () => {
  const [query, setQuery] = useState('');
  const [api, setApi] = useState('');
  const [filterOptions, setFilterOptions] = useState<RdsOptionProps[]>([]);

  const { data, error } = useSWR(api, fetcher);

  console.log(data);
  console.log(error);

  useEffect(() => {
    if (query) {
      setApi(`https://jsonplaceholder.typicode.com/todos?&q=${query}`);
    } else {
      setFilterOptions([]);
    }
  }, [query]);

  useEffect(() => {
    if (data && data.length) {
      const options = data.slice(0, 10).map((el: DateProps) => ({ key: `${el.id}`, primary: el.title }));
      setFilterOptions(options);
    }
  }, [data]);

  return (
    <RdsContainer>
      {/* <Marked file="src/docs/components/installation/installation.md" /> */}
      <Card>
        <CardContent>
          <RdsForm initialValues={filterValues} onSubmit={(values) => console.log(values)}>
            <RdsField
              name="selected"
              select
              options={filterOptions}
              label="Filter"
              margin="0 0 8px 0"
              width="50%"
              onOptionSelected={(option) => console.log(option)}
              onSearch={(query) => setQuery(query)}
              hideSelectedLabel
              loading={!data}
            />
            <RdsField
              name="selecteds"
              select
              options={filterOptions}
              label="Filter Multiple"
              margin="0 0 8px 0"
              width="50%"
              onOptionSelected={(option) => console.log(option)}
              onSearch={(query) => setQuery(query)}
              multiple
              hideSelectedLabel
            />
          </RdsForm>
          <RdsForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(JSON.stringify(values, null, 2));
              console.log(actions);
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="start">
              <RdsField
                name="select"
                select
                options={options}
                label="Select"
                margin="0 0 8px 0"
                width="50%"
                onOptionSelected={(option) => console.log(option)}
                required
              />
              <RdsField
                name="multiple"
                select
                options={options}
                multiple
                label="Multiple"
                margin="0 0 8px 0"
                required
                width="50%"
                hideSelectedLabel
                onOptionSelected={(option) => console.log(option)}
              />
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
