import { ErrorProps } from "../props/error";

const ShowError = ({ status, message }: ErrorProps) => {
  return (
    <>
      <h2> {status === 404 ? "No result found" : "Something went wrong"} /</h2>
      <p>Status: {status}</p>
      <p>Message: {message}</p>
    </>
  );
};

export default ShowError;
