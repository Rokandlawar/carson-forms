import Dropdown from './dropdown'
import TextField from './textbox'
import Checkbox from './checkbox'
import DatePicker from './datepicker'
import PhoneText from './phonetext'
import GroupField from './groupField'


const fieldTypes = {
    dropdown: Dropdown,
    textbox: TextField,
    checkbox: Checkbox,
    datepicker: DatePicker,
    phonetext: PhoneText,
    group: GroupField
}

export default fieldTypes