
const names = ['Alice', 'Bob', 'Charlie', 'David'];

function NameList() {
  return (
    <div>
      <h1>List of Names</h1>
      <ul> {/* here we use ul for an unorganized list */}
        {names.map((name, index) => (/*iterates over the names array and returns a list*/
          <li key={index}>{name}</li> /*li for the elements of a list*/
        ))}
      </ul> 
    </div>
  );
}

export default NameList;