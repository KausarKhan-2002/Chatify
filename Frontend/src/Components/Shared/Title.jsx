import { Helmet } from "react-helmet";

function Title() {
  let title = "Chat App";
  let description = "This is chat application to build the connection";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Title;
