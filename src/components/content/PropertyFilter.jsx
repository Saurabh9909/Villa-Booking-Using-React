import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyComp, { propertyRecord } from '../property/PropertyComp'

export default function PropertyFilter() {
  const [properties, setProperties] = useState([])
  const [filterProperties, setfilterProperties] = useState([])
  const [filterType, setfilterType] = useState(null)

  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await propertyRecord();
        setProperties(data);
      }
      catch (error) {
        throw new Error("Error fetvhinig properties", error)
      }
    }
    getProperties();
  }, []);

  useEffect(() => {
    if (filterType !== null) {
      const filterd = properties.filter(Property => Property.propertyType === filterType)
      setfilterProperties(filterd);
    }
    else {
      setfilterProperties(properties);
    }
  }, [filterType, properties]);
  return (
    <div>
      <div className="section properties">
        <div className="container">
          <ul className="properties-filter">
            <li>
              <Link  className="is_active" onClick={() => setfilterType(null)}>Show All</Link>
            </li>
            <li>
              <Link  onClick={() => setfilterType(1)} >Luxury Villa</Link>
            </li>
            <li>
              <Link  onClick={() => setfilterType(2)} >Apartment</Link>
            </li>
            <li>
              <Link onClick={() => setfilterType(3)}>Penthouse</Link>
            </li>
            <li>
              <Link onClick={() => setfilterType(4)}>Modern Condo</Link>
            </li>
          </ul>
          <div className="row properties-box">
            <div className="properties section">
              <div className="container">
                <PropertyComp properties={filterProperties} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                {/* <li><a href="#">{"<<"}</a></li> */}
                <li><a className='is_active' href="#">1</a></li>
                <li><a className="" href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">{">>"}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


