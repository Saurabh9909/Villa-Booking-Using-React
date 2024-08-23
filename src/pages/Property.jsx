import React, { useEffect, useState } from 'react'
import BreadCrum from '../components/content/BreadCrum'
import PropertyFilter from '../components/content/PropertyFilter'
import { useParams } from 'react-router-dom'

export default function Property() {
  const { id } = useParams()
  return (
    <div>
      <BreadCrum page="Property" title="Property" />
      <PropertyFilter />
    </div>
  )
}

export const propertyDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/property/" + id);
  if (!res.ok) {
    throw new Error(`Could not found this property details`);
  }
  return res.json();
}