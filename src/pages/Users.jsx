import { useLoaderData, Link } from "react-router-dom"

export default function Table() {
  const tables = useLoaderData()
  return (
    <div>
      <div className='row' >
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Striped Table</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>First name</th>
                      <th>Amount</th>
                      <th>Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tables.map(user => (
                        <tr>
                          <Link to={user.id.toString()} key={user.id}>
                            <td className="py-1"><img src="assets/images/faces/face1.jpg" alt="image" /></td>
                          </Link>
                          <td>{user.id}</td>
                          <td>{user.title}</td>
                          <td>{user.body}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// loader function
export const tableLoader = async () => {
  const res = await fetch("http://localhost:4000/users")
  if (!res.ok) {
    throw Error("Could not found users records")
  }
  return res.json()
}