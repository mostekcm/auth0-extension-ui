import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Field } from 'redux-form';

import Multiselect from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={Multiselect}
      loadOptions={field.loadOptions}
    />
  );
}

storiesOf('Multiselect', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      loadOptions: (input, callback) => {
        callback(null, {
          options: [
            { value: 'ariel', label: 'Ariel Gerstein', email: 'ariel@auth0.com' },
            { value: 'victor', label: 'Victor Fernandez', email: 'victor@auth0.com' },
            { value: 'ricky', label: 'Ricky Rauch', email: 'ricky@auth0.com' },
            { value: 'cherna', label: 'Tomas Cherna', email: 'cherna@auth0.com' }
          ],
          complete: true
        });
      }
    };
    return renderField(field);
  });
