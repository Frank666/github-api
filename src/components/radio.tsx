import { RadioOptions } from "../props/RadioOptions";

const RadioButton = ({ name, value, id, onChange } : RadioOptions)  => {
    
    const handleRadioChange = (e: any) => {
        const { id } = e.currentTarget;
        onChange(id);
      };

return (
    <>
        <input type="radio" name={name} id={id} onChange={handleRadioChange} /> <label> {value}</label>    
    </>
)
}

export default RadioButton;