import downloadToFile from "../util/downloadFile";
import { useState } from "react";

const initialValues = {
    name: "",
    image: "",
    description: "",
    type: "Axe",
    value: "0",

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
            <div className="weapon-rarity-selector">
                <button>Common</button>
                <button>Uncommon</button>
                <button>Rare</button>
                <button disabled>Epic</button>
            </div>
            <form>
              <div>
                  <p>Name:</p>
                  <input name="name" type="text" placeholder="name" value={state.name} onChange={handleChange} />
              </div>
              <div>
                  <p>Image Name:</p>
                  <input name="image" type="text" placeholder={`arch/weapons/crafting/${(state.type).toLowerCase()}/<Name-Only>.png`}/>
              </div>
              <div>
                  <p>Description:</p>
                  <input name="description" type="text" placeholder="Weapon Description" value={state.description} />
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
              <div>
                  <p>Value:</p>
                  <input name="value" type="text" placeholder="Values" value={state.value} />
              </div>
          </form>
          <button onClick={downloadToFile}>Click to Save</button>
        </div>
    )
}