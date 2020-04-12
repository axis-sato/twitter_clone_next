import { NextPage } from "next";
import Layout from "@components/layout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@core/reducers";
import { addUser } from "@core/slices/usersSlice";
import User from "@core/types";

const Users: NextPage = () => {
  const { users } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  const add = (): void => {
    const user: User = {
      id: 1,
      name: "foo",
      icon: "foo",
      profile: "",
      isFollower: false,
      followeeCount: 10,
    };
    dispatch(addUser(user));
  };

  return (
    <Layout>
      <div>Users</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <input type="button" value="追加" onClick={add} />
    </Layout>
  );
};

export default Users;
