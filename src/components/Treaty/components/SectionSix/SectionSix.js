import React from "react";
import "./SectionSix.css";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionSix = () => {
  return (
    <div className="section-six-wrapper" id="section-6">
      <h3 className="six">Borders Rules and Points:</h3>
      <form>
        <h5>Install a Border?</h5>
        <label className="form-control six-radio" htmlFor="born-bory">
            <input type="radio" name="born-bory" id="born" value="born" checked />No
        </label>
        <label className="form-control six-radio" htmlFor="born-bory">
            <input type="radio" name="born-bory" value="bory" id="bory" />Yes
        </label>
      </form>
      <form>

        <h5>Describe the border at points of change:</h5>
        <label htmlFor="bordDesc">
          <textarea type="text" name="bordDesc" id="bordDesc" placeholder="Ex: a4/a5 to h4/h5"></textarea>
        </label>

        <h5>Border Breach - BB - Points:</h5>
        <label htmlFor="borpts">
          <input type="number" id="borpts" name="borpts" min="-10" step="1" max="10" placeholder="Default: No border" />
        </label>

        <h5>Enforcement Type (Select Only One):</h5>
        <label className="form-control six-radio" htmlFor="boren1-boren5">Absolute:  The same border points enforced each Border Breach - BB
          <input type="radio" name="boren1-boren5" id="boren1" value="boren1" />
        </label>
        <label className="form-control six-radio" htmlFor="boren1-boren5">Staircase Descending: 1 point down each overall Border Breach - BB
          <input type="radio" name="boren1-boren5" id="boren2" value="boren2" />
        </label>
        <label className="form-control six-radio" htmlFor="boren1-boren5">Staircase Round: 1 point down each Player's Border Breach - BB
          <input type="radio" name="boren1-boren5" id="boren3" value="boren3" />
        </label>
        <label className="form-control six-radio" htmlFor="boren1-boren5">Once:  Only enforced the 1st overall Border Breach - BB
          <input type="radio" name="boren1-boren5" id="boren4" value="boren4" />
        </label>
        <label className="form-control six-radio" htmlFor="boren1-boren5">One time overall for each Player's 1st Border Breach - BB
          <input type="radio" name="boren1-boren5" id="boren5" value="boren5" />
        </label>

      </form>
        <OfferButton />
        <SubmitButton />
    </div>
  )
}

export default SectionSix;