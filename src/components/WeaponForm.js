import downloadToFile from "../util/downloadFile";
import weaponRarityParser from "../util/weaponRarityParser";
import weaponValueParser from "../util/weaponValueParser";
import { useState } from "react";

const initialValues = {
    name: "",
    image: "",
    description: "",
    type: "Axe",
    value: "0",
    wc: 0,
}

export default function WeaponForm(){
    const [state, setState] = useState(initialValues);
    const [weaponRarity, setWeaponRarity] = useState(weaponRarityParser(1))

    const handleChange = e => {
        e.preventDefault();
        return setState({...state,
        [e.target.name]: e.target.value})
    };

    const updateWeaponRarity = (e) => {
        e.preventDefault();
        let rarity = weaponRarityParser(Number(e.target.name));
        return setWeaponRarity(rarity)
    }

    return(
        <div className="arch-form-container">
            <div className="weapon-rarity-selector">
                <button name="1" disabled={(weaponRarity.rarity === 1) ? true:false} onClick={updateWeaponRarity} >Common</button>
                <button name="2" disabled={(weaponRarity.rarity === 2) ? true:false} onClick={updateWeaponRarity} >Uncommon</button>
                <button name="3" disabled={(weaponRarity.rarity === 3) ? true:false} onClick={updateWeaponRarity} >Rare</button>
                <button name="4" disabled={(weaponRarity.rarity === 4) ? true:false} onClick={updateWeaponRarity} >Epic</button>
            </div>
            <form>
              <div>
                  <p>Name:</p>
                  <input name="name" type="text" placeholder="name" defaultValue={state.name} onChange={handleChange} />
              </div>
              <div>
                  <p>Image Name:</p>
                  <input name="image" type="text" placeholder={`arch/weapons/crafting/${(state.type).toLowerCase()}/<Name-Only>.png`}/>
              </div>
              <div>
                  <p>Description:</p>
                  <input name="description" type="text" placeholder="Weapon Description" defaultValue={state.description} />
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
                  <p>WC:</p>
                  <input name="wc" type="number" defaultValue={state.wc} onChange={handleChange} min="0" />
              </div>
              <div>
                  <p>Max WC:</p>
                  <p>{Number(state.wc) + 10}</p>
              </div>
              <div>
                  <p>Value:</p>
                  <p>{(Math.ceil(weaponRarity.value + weaponValueParser(state.wc))).toLocaleString('en', {useGrouping: true})}</p>
              </div>
              <div>
                  <p>Durability:</p>
                  <p>{weaponRarity.durability}</p>
              </div>
              <div>
                  <p>Wight:</p>
                  <p>{weaponRarity.weight} lbs</p>
              </div>
          </form>
          <button onClick={downloadToFile}>Click to Save</button>
        </div>
    )
}