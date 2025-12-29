import CounterComponent from "./functionalcomponent/CustomHook/CounterComponent"
import UseStateExample from "./functionalcomponent/Use1_StateExample"
import UseEffectExample from "./functionalcomponent/Use2_EffectExample"
import UseContextExample from "./functionalcomponent/Use3_ContextExample"
import UseRefExample from "./functionalcomponent/Use4_RefExample"
import UseReducerExample from "./functionalcomponent/Use5_ReducerExample"
import UseMemoExample from "./functionalcomponent/Use6_MemoExample"
import UseCallbackExample from "./functionalcomponent/Use7_CallbackExample"
import Parent_Prop from "./functionalcomponent/Parent_Prop"
import SimpleForm from "./pages/SimpleForm"


// classbase component imports
import Class1_Hello from "./classcomponent/Class1_Hello"
import Class2_State from "./classcomponent/Class2_State"
import Class3_PropParent from "./classcomponent/Class3_PropParent"
import Class4_Lifecycle from "./classcomponent/Class4_Lifecycle"
const App = () => {
  return (
    <div className="bg-gray-600">
      <UseStateExample />
      <UseEffectExample />
      <UseContextExample />
      <UseRefExample />
      <UseReducerExample />
      <UseMemoExample />
      <UseCallbackExample />
      <CounterComponent />
      <Parent_Prop />
      <SimpleForm/>


      {/* class base component  */}

      <Class1_Hello />
      <Class2_State />
      <Class3_PropParent />
      <Class4_Lifecycle />

    </div>
  )
}

export default App
