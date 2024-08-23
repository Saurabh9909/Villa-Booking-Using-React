import BestDealInfo from '../bestdeal/BestDealInfo'
import BestDealImage from '../bestdeal/BestDealImage'
import BestDealDetails from '../bestdeal/BestDealDetails'

export const BestDeal = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
        <div className="row">
          <div className="col-lg-3">
            <BestDealInfo />
          </div>
          <div className="col-lg-6">
            <BestDealImage />
          </div>
          <BestDealDetails />
        </div>
      </div>
      <div className="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
        <div className="row">
          <div className="col-lg-3">
            <BestDealInfo />
          </div>
          <div className="col-lg-6">
            <BestDealImage />
          </div>
          <BestDealDetails />
        </div>
      </div>
      <div className="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
        <div className="row">
          <div className="col-lg-3">
            <BestDealInfo />
          </div>
          <div className="col-lg-6">
            <BestDealImage />
          </div>
          <BestDealDetails />
        </div>
      </div>
    </div>
  )
}

