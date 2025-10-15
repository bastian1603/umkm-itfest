export default function producer_dashboard ()  {
    return (<>
    <h1 className="text-white">
        Product
    </h1>

        <div className="max-w-lg mx-auto">
                <div className="max-w-bg">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Detail</th>
        <th>Ready</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Makaroni Pedas</td>
        <td>Makanan</td>
        <td>Rp 20.000 /Kg</td>
        <td>Makaroni Pedas</td>
        <td>Ready</td>
        <td className="flex flex-col">
            <button className="btn btn-xs btn-success">Edit</button>
            <br />
            <button className="btn btn-xs btn-error">Delete</button>
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>1</th>
        <td>Makaroni Pedas</td>
        <td>Makanan</td>
        <td>Rp 20.000 /Kg</td>
        <td>Makaroni Pedas</td>
        <td>Ready</td>
        <td className="flex flex-col">
            <button className="btn btn-xs btn-success">Edit</button>
            <br />
            <button className="btn btn-xs btn-error">Delete</button>
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>1</th>
        <td>Makaroni Pedas</td>
        <td>Makanan</td>
        <td>Rp 20.000 /Kg</td>
        <td>Makaroni Pedas</td>
        <td>Ready</td>
        <td className="flex flex-col">
            <button className="btn btn-xs btn-success">Edit</button>
            <br />
            <button className="btn btn-xs btn-error">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    
    </>);
}