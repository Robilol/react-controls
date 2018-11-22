import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpCheckbox from './UpCheckBox'
import UpLabel from '../../Display/Label'
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


var onOptionChange = () => { }
var state = {
    activation: false,
    majeur: false,
    homme: true,
    grand: false,
    couleur: "red",
    selection: null //{id: 3, text : ""}
}

var onActivationChange = () => {
    state.activation = !state.activation;
}

const stories = storiesOf('Inputs/UpCheckbox', module) ;
stories.addDecorator(getRootContainer('UpCheckbox'));
stories.addDecorator(withKnobs)
stories.add('Simple usage',
    () => (
        <UpLabel textAlign={"left"} inline={true} width="medium" text="Activation de ... :">
            <UpCheckbox options={[{
                    text: "",
                    name: "Option1",
                    onOptionChange: onActivationChange,
                    value: true,
                    checked: state.activation === true
                }]} />
            </UpLabel>
), { info : 'Utilisation avec plusieurs options' }
).add('Multiple usage',
   () => (
        <UpLabel inline={true} width="small" text="Choix :">
            <UpCheckbox options={[{
                    text: "Vous êtes majeur ?",
                    name: "Option1",
                    onOptionChange: onOptionChange,
                    value: true,
                    checked: state.majeur === true
                }, {
                    text: "Vous êtes Homme ?",
                    name: "Option2",
                    onOptionChange: onOptionChange,
                    value: true,
                    checked: state.homme === true
                }, {
                    text: "Vous êtes grand ?",
                    name: "Option3",
                    onOptionChange: onOptionChange,
                    value: true,
                    checked: state.grand === true
                }]} />
            </UpLabel>
  ), { info : 'Utilisation avec plusieurs options' }
) ;
