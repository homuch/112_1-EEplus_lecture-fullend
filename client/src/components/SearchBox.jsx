import { CForm, CFormInput } from "@coreui/react";

const SearchBox = ({ handleSearch }) => {
  return (
    <CForm className="my-2">
      <CFormInput
        type="search"
        className="me-2"
        placeholder="搜尋想參加的活動"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch(e.target.value);
          }
        }}
      />
    </CForm>
  );
};

export default SearchBox;
