import React from 'react';
import ExampleCode from "../index";
const App=<div>
        <ExampleCode>
            {`
            <Form mode="EDIT" className="horizontal-form">
                <FormRow>
                    <InputFormField   className="one-third"  label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>
                    <InputFormField   className="one-third"  label="年龄" keyMap="job" />
                    <InputFormField   className="one-third"  label="性别" keyMap="job" />
                </FormRow>
                <TextAreaFormField  label="个人简介" keyMap="introduce" ></TextAreaFormField>
                 
                <Button label="提交" />
            </Form>
           `}
        </ExampleCode>
    </div>;

React.render(App, document.getElementById('box3'))
