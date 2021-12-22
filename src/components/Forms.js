import { useState } from "react"

import ArmorForm from "./ArmorForm"
import WeaponForm from "./WeaponForm"

export default function Forms(){
    const [formType, setFormType] = useState(true)

    const toggleForms = (e) => {
        e.preventDefault();
        return setFormType(!formType)
    }

    return(
        <section className="forms-container">
            <div className="form-selector-section">
                <button className="selector-button" disabled={formType} onClick={toggleForms} >Weapon</button>
                <button className="selector-button" disabled={!formType} onClick={toggleForms} >Armor</button>
            </div>
            {
                (formType) ? <WeaponForm /> : <ArmorForm />
            }
        </section>
    )
}