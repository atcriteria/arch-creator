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
    const [bonusSkills, setBonusSkills] = useState({});

    const numHandsMultipliers = {
        value: (Number(state["num-hands"]) === 2) ? 1.65 : 1,
        weight: (Number(state["num-hands"]) === 2) ? 1.8 : 1,
        durability: (Number(state["num-hands"]) === 2) ? 1.25 : 1,
    };

    console.log(state)
    console.log(bonusSkills)

    const handleChange = e => {
        e.preventDefault();
        return setState({...state,
            [e.target.name]: e.target.value})
        };
        
        const handleBonusSkills = e => {
        if(bonusSkills[e.target.value] === 1){
            // in state
            let copyState = bonusSkills
            delete copyState[e.target.value]
            return setBonusSkills({...copyState})
        }
        // Not in state
        return setBonusSkills({...bonusSkills,
            [e.target.value]: 1});
    }

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
              <div>
                  <p>Bonus Skills:</p>
                  <fieldset className="bonus-skills-section">
                      <div>
                        <input type="checkbox" id="axe" name="bonus-skills" value="axe" onChange={handleBonusSkills} /><label htmlFor="axe">axe</label>
                      </div>
                      <div>
                        <input type="checkbox" id="blade" name="bonus-skills" value="blade" onChange={handleBonusSkills} /><label htmlFor="blade">blade</label>
                      </div>
                      <div>
                        <input type="checkbox" id="bow" name="bonus-skills" value="bow" onChange={handleBonusSkills} /><label htmlFor="bow">bow</label>
                      </div>
                      <div>
                        <input type="checkbox" id="club" name="bonus-skills" value="club" onChange={handleBonusSkills} /><label htmlFor="club">club</label>
                      </div>
                      <div>
                        <input type="checkbox" id="polearm" name="bonus-skills" value="polearm" onChange={handleBonusSkills} /><label htmlFor="polearm">polearm</label>
                      </div>
                      <div>
                        <input type="checkbox" id="sword" name="bonus-skills" value="sword" onChange={handleBonusSkills} /><label htmlFor="sword">sword</label>
                      </div>
                      <div>
                        <input type="checkbox" id="staff" name="bonus-skills" value="staff" onChange={handleBonusSkills} /><label htmlFor="staff">staff</label>
                      </div>
                      <div>
                        <input type="checkbox" id="whip" name="bonus-skills" value="whip" onChange={handleBonusSkills} /><label htmlFor="whip">whip</label>
                      </div>
                      <div>
                        <input type="checkbox" id="air" name="bonus-skills" value="air" onChange={handleBonusSkills} /><label htmlFor="air">air</label>
                      </div>
                      <div>
                        <input type="checkbox" id="death" name="bonus-skills" value="death" onChange={handleBonusSkills} /><label htmlFor="death">death</label>
                      </div>
                      <div>
                        <input type="checkbox" id="earth" name="bonus-skills" value="earth" onChange={handleBonusSkills} /><label htmlFor="earth">earth</label>
                      </div>
                      <div>
                        <input type="checkbox" id="fire" name="bonus-skills" value="fire" onChange={handleBonusSkills} /><label htmlFor="fire">fire</label>
                      </div>
                      <div>
                        <input type="checkbox" id="life" name="bonus-skills" value="life" onChange={handleBonusSkills} /><label htmlFor="life">life</label>
                      </div>
                      <div>
                        <input type="checkbox" id="mind" name="bonus-skills" value="mind" onChange={handleBonusSkills} /><label htmlFor="mind">mind</label>
                      </div>
                      <div>
                        <input type="checkbox" id="spirit" name="bonus-skills" value="spirit" onChange={handleBonusSkills} /><label htmlFor="spirit">spirit</label>
                      </div>
                      <div>
                        <input type="checkbox" id="water" name="bonus-skills" value="water" onChange={handleBonusSkills} /><label htmlFor="water">water</label>
                      </div>
                  </fieldset>
              </div>
          </form>
          <button onClick={downloadToFile}>Click to Save</button>
        </div>
    )
}