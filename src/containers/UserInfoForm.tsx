import CheckboxField from "../components/CheckboxField";
import SelectboxField from "../components/SelectboxField";
import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { min, max } from "../utils/validate";

function UserInfoForm(): JSX.Element {
  return (
    <SimpleForm>
      <TextField source={"name"} label={"이름"} validate={[min(5), max(10)]} />
      <TextField
        type="password"
        source={"password"}
        label={"비밀번호"}
        validate={[min(5), max(10)]}
      />
      <CheckboxField source={"html"} label={"HTML"} />
      <CheckboxField source={"javascript"} label={"자바스크립트"} />
      <SelectboxField
        source={"food"}
        label={"분식"}
        option={["떡볶이", "순대", "튀김"]}
      />
      <SelectboxField
        source={"sports"}
        label={"스포츠"}
        option={["축구", "테니스", "격투기"]}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;
