import { useState } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const SearchBar = () => {

  const [cari, setCari] = useState('')

  return (
    <div className="">
      <label htmlFor="form-search" className="">
        <ManageSearchIcon 
            fontSize="large"
            className=""
        />
      </label>
      <input
        type="text"
        className=""
        placeholder="Search Movie ..."
        defaultValue={cari}
        onChange={(e) => {
            setCari(e.target.value)
            console.log(e.target.value)
        }}
      />
    </div>
  );
};

export default SearchBar;
