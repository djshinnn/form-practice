import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { min, max } from "../utils/validate";

function UserInfoForm() {
  return (
    <SimpleForm>
      <TextField
        source={"name"}
        label={"이름"}
        validate={[min(5), max(10)]}
        errorText={`올바른 이름을 입력해주세요.`}
      />
      <TextField
        type="password"
        source={"password"}
        label={"비밀번호"}
        validate={[min(5), max(10)]}
        errorText={"올바른 비밀번호를 입력해주세요."}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;
