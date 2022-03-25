import React, { useEffect, useState } from 'react';
import { User } from 'types';
// import 'styles.css';
import {
  useParams,
} from "react-router-dom";
import { UserService } from 'services/API';

const userService = new UserService();

export const UserDetail = (): JSX.Element => {
  const {id = ''} = useParams();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    userService.show(id).then((data) => setUser(data));
  },[id, setUser]);
  
  return (
    <div>
      <h1>
        UserDetail {id}
      </h1>
      {
        user && (
          <div>
            email: {user.email}
          </div>
        )
      }
    </div>
  );
};

export default UserDetail;
