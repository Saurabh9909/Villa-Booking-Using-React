import { Link, useLoaderData, useParams } from 'react-router-dom'
import UserBreadCrum from '../components/content/UserBreadCrum'

export default function UsersDetails() {
  const { id } = useParams()
  const users = useLoaderData()
  return (
    <div>
      <UserBreadCrum></UserBreadCrum>
      <h4>{users.title}</h4>
    </div>
  )
}
// loader function
export const UsersDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch("http://localhost:4000/users/" + id)
  if (!res.ok) {
    throw Error("Could not find this user details")
  }
  return res.json()
}