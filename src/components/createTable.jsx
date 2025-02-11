export default function CreateTable({ productsCart, removeOption }) {
  const tableHeaders = Object.keys(productsCart[0][0]).map((key) => {
    return <th>{key}</th>;
  });
  const tableBoxes = productsCart[0].map((product) => {
    return (
      <tr>
        {Object.values(product).map((value) => {
          return <td>{value}</td>;
        })}
        {removeOption && (
          <td
            onClick={() => {
              productsCart[0].splice(productsCart[0].indexOf(product), 1);
              productsCart[1]([...productsCart[0]]);
            }}
          >
            הסר
          </td>
        )}
      </tr>
    );
  });

  return (
    <>
      <h2> עגלת קניות </h2>

      <table>
        <tr>{tableHeaders}</tr>
        {tableBoxes}
      </table>
    </>
  );
}
