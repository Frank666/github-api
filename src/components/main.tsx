import useAxios from "../hooks/useAxios";
import RadioButton from "./radio";
import { useState } from "react";
import DisplayResult from "./user";
import { GithubResult } from "../props/GithubResult";
import ShowError from "./showError";

const Main = () => {
  const [optionSelected, setOptionSelected] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { response, loading, error, sendData } = useAxios<GithubResult>(
    {
      method: "get",
      url: `/${optionSelected}/${searchValue}`,
      headers: {
        accept: "*/*",
      },
    },
    false
  );

  const handleChange = (inputValue: any) => {
    setSearchValue("");
    setOptionSelected(inputValue);
  };

  const handleEnter = (inputValue: any) => {
    if (inputValue.key === "Enter") {
      sendData();
    }
  };

  const handleTextValueChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const fetchData = () => {
    if (typeof searchValue !== "undefined" && searchValue) {
      sendData();
    }
  };

  return (
    <>
      <h1>Select an option</h1>
      <p>
        <RadioButton
          id="orgs"
          name="github"
          value="Organization"
          onChange={handleChange}
        />
        <RadioButton
          id="users"
          name="github"
          value="Users"
          onChange={handleChange}
        />
      </p>
      {typeof optionSelected !== "undefined" && optionSelected ? (
        <>
          <h2>Type a value ({optionSelected})</h2>
          <input
            type="textbox"
            autoFocus
            onChange={(e) => {
              handleTextValueChange(e);
            }}
            onKeyDown={(e) => {
              handleEnter(e);
            }}
            value={searchValue}
          />
          <input type="button" onClick={fetchData} value="Search" />
          {loading && <p>Loading...</p>}
          {(loading || error?.response?.status) ?? 0 > 0 ? (
            <ShowError
              status={error?.response?.status ?? 0}
              message={error?.message ?? ""}
            />
          ) : (
            <DisplayResult data={response} />
          )}
        </>
      ) : null}
    </>
  );
};

export default Main;
