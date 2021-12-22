import downloadToFile from "../util/downloadFile";
import { useState } from "react";

const initialValues = {
    name: "",
    image: "",
    type: "Axe",

}

export default function WeaponForm(){
    const [state, setState] = useState(initialValues);

    const handleChange = e => {
        e.preventDefault();
        return setState({...state,
        [e.target.name]: e.target.value})
    }

    return(
        <div className="arch-form-container">
            <form>
              <div>
                  <p>Name:</p>
                  <input name="name" type="text" placeholder="name" value={state.name} onChange={handleChange} />
              </div>
              <div>
                  <p>Image Name:</p>
                  <input name="image" type="text" placeholder={`weapons/crafting/${(state.type).toLowerCase()}/<this-is-what-youre-changing>`}/>
              </div>
              <div>
                  <p>Weapon Type:</p>
                  <select name="type" id="weapon-type" onChange={handleChange} >
                      <option value="Axe">Axe</option>
                      <option value="Blade">Blade</option>
                      <option value="Bow">Bow</option>
                      <option value="Claws">Claws</option>
                      <option value="Club">Club</option>
                      <option value="Polearm">Polearm</option>
                      <option value="Staff">Staff</option>
                      <option value="Sword">Sword</option>
                      <option value="Whip">Whip</option>
                  </select>
              </div>
          </form>
          <button onClick={downloadToFile}>Click to Save</button>
        </div>
    )
}