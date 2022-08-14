import React from "react";
import "./SectionTwo.css";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionTwo = () => {
  return (
    <div className="section-two-wrapper" id="section-2">
        <h3 className="two">Nuclear/SDI Unit Rules:</h3>
        <form>
          <h5>Allow them?</h5>
          <label className="form-control two-radio" htmlFor="nucNo-nucYes">Yes
            <input type="radio" name="nucNo-nucYes" value="nucYes" id="nucYes" checked/>
          </label>
          <label className="form-control two-radio" htmlFor="nucNo-nucYes">No
            <input type="radio" name="nucNo-nucYes" id="nucNo" value="nucNo" />
          </label>
        </form>
        <form>
          <h5>Yield for Strategic Nuclear - SN:</h5>
          <label className="form-control two-radio" htmlFor="nuc2x2-nuc3x3">2x2 block of squares (i.e. F-SNza7-b8):
            <input type="radio" name="nuc2x2-nuc3x3" value="nuc2x2" id="nuc2x2" checked/>
          </label>
          <label className="form-control two-radio" htmlFor="nuc2x2-nuc3x3">2x3 block of squares (i.e. F-SNzc1-a2):
            <input type="radio" name="nuc2x2-nuc3x3" id="nuc2x3" value="nuc2x3" />
          </label>
          <label className="form-control two-radio" htmlFor="nucNo-nucYes">3x3 block of squares <em className="text-lowercase bold">(County Be Gone!)</em> (i.e. F-SNzf6-h8): 
            <input type="radio" name="nuc2x2-nuc3x3" id="nuc3x3" value="nuc3x3" />
          </label>
        </form>
        <form>
            <h5>Points Settings:</h5>
            <label htmlFor="depPts">Deploy - D:
              <input type="number" min="-10" step="1" max="10" name="depPts" placeholder="0" />
            </label>
            <label htmlFor="actPts-buySDI">Activate - C:
              <input type="number" min="-10" step="1" max="10" name="actPts" placeholder="0"/>
            </label>
            <label htmlFor="armPts-buySDI">Arm - R:
              <input type="number" min="-10" step="1" max="10" name="armPts" placeholder="0"/>
            </label>
            <label htmlFor="firPts-buySDI">Fire - F:
              <input type="number" min="-10" step="1" max="10"name="firPts"  placeholder="0"/>
            </label>
            <label htmlFor="firPts-buySDI">Buy SDI Defense (both MSDI / FSDI) - B:
              <input type="number" min="-10" step="1" max="10"name="buySDI"  placeholder="-2"/>
            </label>
        </form>
        <form>

        </form>
        <OfferButton />
        <SubmitButton />
    </div>
  )
}

export default SectionTwo;