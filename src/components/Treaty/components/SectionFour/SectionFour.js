import React from "react";
import "./SectionFour.css";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";


const SectionFour = () => {
  return (
    <div className="section-four-wrapper" id="section-4">
        <h3 className="four">Conventional Unit Turns and Move Elements:</h3>
        <form>
          <h5>Allow <em className="text-lowercase">en passant</em> - e.p.?</h5>
          <label className="form-control" htmlFor="epy-epn">Yes
              <input type="radio" name="epy-epn" value="yes" id="epy" checked />
            </label>
            <label className="form-control" htmlFor="epy-epn">No
              <input type="radio" name="epy-epn" value="no" id="epn" />
            </label>
        </form>
        <form>
          <h5>Select type of Infantry Promotion - x1/8=:</h5>
          <label className="form-control" htmlFor="prom1-prom3">None: Player's Infantry/MTN score 2x their Cash Value
              <input type="radio" name="prom1-prom3" value="prom1" id="prom1" />
          </label>
          <label className="form-control" htmlFor="prom1-prom3">Captured: Infantry/MTN Promote only to Captured Units
              <input type="radio" name="prom1-prom3" value="prom2" id="prom2" />
          </label>
          <label className="form-control" htmlFor="prom1-prom3">All: Players can Promote to All (like Chess: x1/MTN = G/MIN) 
              <input type="radio" name="prom1-prom3" value="prom3" id="prom3" checked />
          </label>
        </form>
        <form>
          <h5>Allow 'Protect the President' - O-O / O-O-O?</h5>
          <label className="form-control" htmlFor="proy-pron">Yes
              <input type="radio" name="proy-pron" value="yes" id="proy" checked />
          </label>
          <label className="form-control" htmlFor="proy-pron">No
              <input type="radio" name="proy-pron" value="no" id="pron" />
          </label>
        </form>
          <OfferButton />
          <SubmitButton />
    </div>
  )
}

export default SectionFour;