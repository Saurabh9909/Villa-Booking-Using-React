import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom'

export default function PropertyComp({ properties }) {
  const { propertyType } = useParams();
  // const properties = useLoaderData()
  if (!Array.isArray(properties)) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          Oops, No properties found !!!
        </h1>
      </div>)
  }

  return (
    <div className="row">
      {
        properties.map(Property => (
          <>
            <div className="col-lg-4 col-md-6" tabIndex={`${Property.id}${Property.villaConactDetails}`} >
              <div className="item">
                <NavLink to={Property.id.toString()}><img src={Property.villaPoster} alt="" /></NavLink>
                <span className="category">{Property.villaType}</span>
                <h6>${Property.villaRent}</h6>
                <h4><Link to={Property.id.toString()}>{Property.villaAddress}, OR {Property.villaConactDetails}</Link></h4>
                <ul>
                  <li tabIndex={`${Property.id}${1}`}>Bedrooms: <span>{Property.Bedrooms}</span></li>
                  <li tabIndex={`${Property.id}${2}`}>Bathrooms: <span>{Property.Bathrooms}</span></li>
                  <li tabIndex={`${Property.id}${3}`}>Area: <span>{Property.Area}</span></li>
                  <li tabIndex={`${Property.id}${4}`}>Floor: <span>{Property.Floor}</span></li>
                  <li tabIndex={`${Property.id}${5}`}>Parking: <span>{Property.Parking}</span></li>
                </ul>
                <div className="main-button">
                  <NavLink to={`/schedule-visit/${Property.id.toString()}`}>Schedule a visit</NavLink>
                </div>
              </div>
            </div>
          </>
        ))
      }
    </div >
  )
}


export const propertyRecord = async () => {
  const res = await fetch("http://localhost:4000/property")
  if (!res.ok) {
    throw Error("Could not found property record")
  }
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}


export const propertyTypeRecord = async ({ params }) => {
  const { propertyType } = params;
  const res = await fetch("http://localhost:4000/property/" + propertyType);
  if (!res.ok) {
    throw new Error(`Could not find property type: ${propertyType}`);
  }
  return res.json();
};
