import downloadToFile from "../util/downloadFile"

export default function WeaponForm(){
    return(
        <div className="arch-form-container">
            <form>
              <div>
                  <p>Name:</p>
                  <input name="name" type="text" placeholder="name" />
              </div>
              <div>
                  <p>Image Path:</p>
                  <input name="image-path" type="text" placeholder="format/like/this.png"/>
              </div>
              <div>
                  <p>Weapon Type:</p>
                  <select name="weapon-type" id="weapon-type">
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