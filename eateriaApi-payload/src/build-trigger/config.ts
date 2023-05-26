import { Field } from 'payload/types';
import InputField from './InputField';
import Cell from './Cell';

const buildTriggerField: Field = {
  name: 'buildTrigger',
  type: 'text',
  admin: {
    components: {
      Field: InputField,
      Cell,
    }
  }
};

export default buildTriggerField;