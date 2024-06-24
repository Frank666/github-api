import { Content } from "../props/content";
import Card from "./card";

const DisplayResult = ({ data }: Content) => {
  return (
    <>
      {typeof data !== "undefined" && data ? (
        <>
          <Card
            login={data?.login ?? ""}
            name={data?.name ?? ""}
            id={data?.id ?? ""}
            avatar_url={data?.avatar_url ?? ""}
            location={data?.location ?? ""}
            company={data?.company ?? ""}
            publicRepos={data?.publicRepos ?? ""}
            followers={data?.followers ?? ""}
            following={data?.following ?? ""}
            url={data?.url ?? ""}
            type={data?.type ?? ""}
          />
        </>
      ) : null}
    </>
  );
};

export default DisplayResult;
