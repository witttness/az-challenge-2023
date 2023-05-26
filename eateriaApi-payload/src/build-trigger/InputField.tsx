import React, { useEffect, useState, useCallback, Fragment } from 'react'

// this is how we'll interface with Payload itself
import { useFieldType } from 'payload/components/forms';

// retrieve and store the last used colors of your users
import { usePreferences } from 'payload/components/preferences';

// re-use Payload's built-in button component
import { Button } from 'payload/components';

// we'll re-use the built in Label component directly from Payload
import { Label } from 'payload/components/forms';

// we can use existing Payload types easily
import { Props } from 'payload/components/fields/Text';

// we'll import and reuse our existing validator function on the frontend, too
// import { validateHexColor } from './config';

// Import the SCSS stylesheet
import './styles.scss';

// keep a list of default colors to choose from
// const defaultColors = [
//   '#333333',
//   '#9A9A9A',
//   '#F3F3F3',
//   '#FF6F76',
//   '#FDFFA4',
//   '#B2FFD6',
//   '#F3DDF3',
// ];
const baseClass = 'custom-build-trigger';

// const preferenceKey = 'color-picker-colors';

const InputField: React.FC<Props> = (props) => {
  const {
    path,
    label,
    required
  } = props;

  // const {
  //   value = '',
  //   setValue,
  // } = useFieldType({
  //   path,
  //   // validate: validateHexColor,
  // });

  // const { getPreference, setPreference } = usePreferences();
  // const [colorOptions, setColorOptions] = useState(defaultColors);
  // const [isAdding, setIsAdding] = useState(false);
  // const [colorToAdd, setColorToAdd] = useState('');

  // useEffect(() => {
  //   const mergeColorsFromPreferences = async () => {
  //     const colorPreferences = await getPreference<string[]>(preferenceKey);
  //     if (colorPreferences) {
  //       setColorOptions(colorPreferences);
  //     }
  //   };
  //   mergeColorsFromPreferences();
  // }, [getPreference, setColorOptions]);

  // Token:  lceabnc5akefqnslfaztaunwrbxe5h55t66u7mbzdjz3762irf7a
  // https://dev.azure.com/CafeteriaTeamOne/MenuClient/_build?definitionId=5

  const handleTrigger = () => {
    alert('build!');
    // let url = "https://dev.azure.com/CafeteriaTeamOne/MenuClient/_apis/pipelines/5/runs?api-version=7.0";
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application.json',
    //     'Content-Type': 'application/json',
    //     Authorization: 'Basic '
    //   },
    //   body: null,
    //   cache: 'default'
    // })
  };

  // const handleTrigger = useCallback(() => {
  //     setIsAdding(false);
  //   setValue(colorToAdd);

  //   // prevent adding duplicates
  //   if (colorOptions.indexOf(colorToAdd) > -1) return;

  //   let newOptions = colorOptions;
  //   newOptions.unshift(colorToAdd);

  //   // update state with new colors
  //   setColorOptions(newOptions);
  //   // store the user color preferences for future use
  //   setPreference(preferenceKey, newOptions);
  // }, [colorOptions, setPreference, colorToAdd, setIsAdding, setValue]);

  return (
    <div className={baseClass}>
      <Label
        htmlFor={path}
        label={label}
        required={required}
      />
      <Button
        className="build-trigger"
        buttonStyle="secondary"
        onClick={handleTrigger}
      >
        Do Magic
      </Button>
    </div>
  )
};
export default InputField;