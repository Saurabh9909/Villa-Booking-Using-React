import { Link, useLocation } from 'react-router-dom'

export default function BreadCrum(props) {
  const location = useLocation()
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb"><Link to="/">Home</Link>  /  {props.page}</span>
              <h3>{props.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}