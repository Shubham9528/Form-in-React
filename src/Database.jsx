import React, { useEffect } from "react";

function Database({ onAdd }) {
  useEffect(() => {
    if (Object.keys(onAdd).length !== 0) {
      
      console.log("Data added to the database:", onAdd);
    }
  }, [onAdd]);

  return <div>Check console for submitted data.</div>;
}

export default Database;
