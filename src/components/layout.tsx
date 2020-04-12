import Header from "@components/header";
import { NextPage } from "next";

const layoutStyle = {
  margin: 10,
  padding: 10,
};

const Layout: NextPage = (props) => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
