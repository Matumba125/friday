import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import {useState} from "react";

const TestComponent = () => {

    const [editableSpan, setEditableSpan] = useState<string>('')

    const onEditableSpanHandler = (value: string) =>{
        setEditableSpan(value)
    }

    return (
        <div>
            <SuperInputText type={'password'}/>
            <SuperButton value={'hello'}/>
            <SuperSelect/>
            <SuperCheckbox/>
            <SuperRadio/>
            <SuperEditableSpan value={editableSpan} onChangeText={onEditableSpanHandler}/>
        </div>
    );
}

export default TestComponent;