import CounterComponent from "./functionalcomponent/CustomHook/CounterComponent"
import UseStateExample from "./functionalcomponent/Use1_StateExample"
import UseEffectExample from "./functionalcomponent/Use2_EffectExample"
import UseContextExample from "./functionalcomponent/Use3_ContextExample"
import UseRefExample from "./functionalcomponent/Use4_RefExample"
import UseReducerExample from "./functionalcomponent/Use5_ReducerExample"
import UseMemoExample from "./functionalcomponent/Use6_MemoExample"
import UseCallbackExample from "./functionalcomponent/Use7_CallbackExample"

import SimpleForm from "./pages/SimpleForm"

const App = () => {
  return (
    <div className="bg-gray-600">
      <UseStateExample/>
      <UseEffectExample />
      <UseContextExample />
      <UseRefExample />
      <UseReducerExample />
      <UseMemoExample />
      <UseCallbackExample/>
      <CounterComponent/>
      {/* <SimpleForm/> */}
    </div>
  )
}

export default App
