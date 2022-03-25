import React, { useEffect, useState } from 'react';
import { User } from 'types';
import {UserService} from 'services/API/user.service';
import {UserItem} from 'components';

// import 'styles.css';
const userService = new UserService();



export const ListUsers = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    userService.getAll().then((data) => setUsers(data));
  },[userService]);
  
  return (
    <div>
      <h1>
        ListUsers
        {process.env.REACT_APP_NOT_SECRET_CODE}
      </h1>
      <ul>
        {
          users.map(user => (
            <UserItem user={user} />
            // <li key={user.id}>
            //   <a href={'users/'+String(user.id)}>
            //     {user.email}
            //   </a>
            //   <Button variant="danger">
            //     Eliminar
            //   </Button>
            // </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ListUsers;
