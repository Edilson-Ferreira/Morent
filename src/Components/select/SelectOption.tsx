import { BlockSelect, BlockSelectLabelOption, BlocoSelect, LabelSelect, Option, Select } from "./style"

interface SelectOption {
  
}

function SelectOption(){
  return(
    <BlockSelect>
      <BlockSelectLabelOption>
        <BlocoSelect>
          <LabelSelect htmlFor="">Locations</LabelSelect>
          <Select name="" id="">
            <Option value="">Select your city</Option>
            <Option value="Envio1">Envio1</Option>
            <Option value="Envio2">Envio2</Option>
          </Select>
        </BlocoSelect>
        <BlocoSelect>
          <LabelSelect htmlFor="">Date</LabelSelect>
          <Select name="" id="">
            <Option value="">Select your date</Option>
            <Option value="Envio1">Envio1</Option>
            <Option value="Envio2">Envio2</Option>
          </Select>
        </BlocoSelect>
      </BlockSelectLabelOption>
      <BlocoSelect>
          <LabelSelect htmlFor="">Time</LabelSelect>
          <Select name="" id="">
            <Option value="">Select your time</Option>
            <Option value="Envio1">Envio1</Option>
            <Option value="Envio2">Envio2</Option>
          </Select>
        </BlocoSelect>
      </BlockSelect>
  )
}
export default SelectOption