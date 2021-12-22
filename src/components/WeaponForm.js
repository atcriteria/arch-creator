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
    "num-hands": 1,
    material: "Steel",
}

export default function WeaponForm(){
    const [state, setState] = useState(initialValues);
    const [weaponRarity, setWeaponRarity] = useState(weaponRarityParser(1));

    const numHandsMultipliers = {
        value: (Number(state["num-hands"]) === 2) ? 1.65 : 1,
        weight: (Number(state["num-hands"]) === 2) ? 1.8 : 1,
        durability: (Number(state["num-hands"]) === 2) ? 1.25 : 1,
    };

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
                  <p>Num Hands (1/2):</p>
                  <input name="num-hands" type="number" defaultValue="1" onChange={handleChange} min="1" max="2" />
              </div>
              <div>
                  <p>Value:</p>
                  <p>{(Math.ceil(weaponRarity.value + weaponValueParser(state.wc)*(numHandsMultipliers.value))).toLocaleString('en', {useGrouping: true})}</p>
              </div>
              <div>
                  <p>Durability:</p>
                  <p>{Math.round(weaponRarity.durability*numHandsMultipliers.durability)}</p>
              </div>
              <div>
                  <p>Wight:</p>
                  <p>{Math.round(weaponRarity.weight*numHandsMultipliers.weight)} lbs</p>
              </div>
              <div>
                  <p>Material:</p>
                  <select name="material" onChange={handleChange}>
                      <option value="Bone">Bone</option>
                      <option value="Brick">Brick</option>
                      <option value="Bronze">Bronze</option>
                      <option value="Canvas">Canvas</option>
                      <option value="Ceramic">Ceramic</option>
                      <option value="Cloth">Cloth</option>
                      <option value="Concrete">Concrete</option>
                      <option value="Diamond">Diamond</option>
                      <option value="Earth">Earth</option>
                      <option value="Fire">Fire</option>
                      <option value="Glass">Glass</option>
                      <option value="Gold">Gold</option>
                      <option value="Ice">Ice</option>
                      <option value="Iron">Iron</option>
                      <option value="Leather">Leather</option>
                      <option value="Light">Light</option>
                      <option value="Metal">Metal</option>
                      <option value="Mithril">Mithril</option>
                      <option value="Oil">Oil</option>
                      <option value="Organic">Organic</option>
                      <option value="Orichalcum">Orichalcum</option>
                      <option value="Paper">Paper</option>
                      <option value="Phase">Phase</option>
                      <option value="Plastic">Plastic</option>
                      <option value="Rope">Rope</option>
                      <option value="Rubber">Rubber</option>
                      <option value="Silver">Silver</option>
                      <option value="Soil">Soil</option>
                      <option selected value="Steel">Steel</option>
                      <option value="Stone">Stone</option>
                      <option value="Water">Water</option>
                      <option value="Wax">Wax</option>
                      <option value="Wood">Wood</option>
                  </select>
              </div>
          </form>
          <button onClick={downloadToFile}>Click to Save</button>
        </div>
    )
}