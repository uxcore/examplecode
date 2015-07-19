## examplecode plugin

代码显示模块plugin, 方便其他模块使用


===



### 实战 [Live demo ](http://uxcore.github.io/examplecode/)


````
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
````
