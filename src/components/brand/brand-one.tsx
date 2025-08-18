import BrandSlider from "./brand-slider";

const BrandOne = () => {
  return (
    <div className="brandOne" style={{background:'#ffffff00'}}>
      <div className="">
        <div className="tp-brand-brd-top border-0">
          <div className="row align-items-center">
            {/* <div className="col-xxl-2 col-xl-3 col-lg-3">
              <div className="tp-brand-title-box">
                <h4 className="tp-brand-title">Clients I’ve Worked With</h4>
              </div>
            </div> */}
            <div className="">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="tp-brand-slider-wrapper">
                    <BrandSlider/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;