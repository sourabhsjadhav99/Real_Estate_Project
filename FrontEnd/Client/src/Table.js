const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map((item,index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
