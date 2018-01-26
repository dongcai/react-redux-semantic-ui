import { createValidator, required, maxLength, integer, oneOf } from 'utils/validation';

export const colors = [
  { key: 'blue', value: 'Blue', text: 'Blue' },
  { key: 'fuchsia', value: 'Fuchsia', text: 'Fuchsia' },
  { key: 'green', value: 'Green', text: 'Green' },
  { key: 'orange', value: 'Orange', text: 'Orange' },
  { key: 'red', value: 'Red', text: 'Red' },
  { key: 'taupe', value: 'Taupe', text: 'Taupe' }
];

const widgetValidation = createValidator({
  color: [required, oneOf(colors.map(item => item.value))],
  sprocketCount: [required, integer],
  owner: [required, maxLength(30)]
});
export default widgetValidation;
