import Link from "next/link";
import { NextPage } from "next";

const linkStyle = {
  marginRight: 15,
};

const Header: NextPage = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/users">
        <a style={linkStyle}>ユーザ一覧</a>
      </Link>
    </div>
  );
};

export default Header;
