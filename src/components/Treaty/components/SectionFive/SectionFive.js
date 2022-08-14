import React from "react";
import "./SectionFive.css";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionFive = () => {
  return (
    <div className="section-five-wrapper" id="section-5">
      <h3 className="five">Other Points Settings:</h3>
      <form>
        <h5>Successful Illegal Move: - IMD-S:</h5>
        <label htmlFor="imds-encv">
          <input type="number" name="imds" id="imds" min="-10" step="1" max="10" placeholder="5" />
        </label>
        <h5>Unsuccessful Illegal Move - IMD-U:</h5>
        <label>
          <input type="number" name="imdu" id="imdu" min="-10" step="1" max="10" placeholder="-5"/>
        </label>
        <h5>Checkmate Bonus - #:</h5>
        <label>
          <input type="number" name="chkb" id="chkb" min="-10" step="1" max="10" placeholder="10" />
        </label>
        <h5>Penalty for Resigning the Position - <em className="text-lowercase">resigns</em></h5>
        <label>
          <input type="number" name="rsgn" id="rsgn" min="-10" step="1" max="10" placeholder="-10" />
        </label>
        <h5>Envoy's (E) Extra Cash Value</h5>
        <label>
          <input type="number" name="encv" id="encv" min="1" step="1" max="9" placeholder="1" />
        </label>
      </form>
        <OfferButton />
        <SubmitButton />
    </div>
  )
}

export default SectionFive;