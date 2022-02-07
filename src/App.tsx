import "./App.css";
import type {FormEvent} from "react";

const sendForm = async(event: FormEvent<HTMLFormElement>) =>{
  event.prevantDefault();

  const {name,password} = event.target as typeof event.target & {
    name: {value: string}
    password: {value:string}
  };

  // await fetch("/route",{
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  //   body:JSON.stringify({
  //     name:name.value,
  //     password: password.value
  //   })
  // })

  console.log(name.value, password.value)

}

function App() {
  return (
    <form className='wrap' onSubmit={evt => {sendForm(evt)}}>
      <fieldset>
        <label className="field-area" htmlFor="name">
          Name:
        </label>
        <input type="text" name=""  />
      </fieldset>
      <fieldset>
        <label className="field-area" htmlFor="password">
          Pass:
        </label>
        <input type="password" id='password' />
      </fieldset>
      <button type='submit'>
        Login
      </button>
    </form>
  );
}

export default App;
