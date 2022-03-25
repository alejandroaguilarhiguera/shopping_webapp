import { Button, Row, Col } from 'react-bootstrap';
import { User } from 'types';
import { UserService } from 'services/API';

export interface Props {
  user: User,
}

const userService = new UserService();

const onDelete = (id: number) => {
  // userService.delete(id);

}

export const UserItem = (props: Props): JSX.Element => {
  const {user} = props;
  return (
    <Row>
        <Col className='colEmail'>
            email: {user.email}
        </Col>
        <Col>
            <Button variant='danger' onClick={() => onDelete(user.id)}>
                Eliminar
            </Button>
        </Col>
    </Row>

    // <div className="row">
    //   <label id="lblMenu" htmlFor="btnMenu">
    //     <img src={iconMenu} />
    //   </label>

    //   <h6 className="flex-grow text-2xl font-bold">
    //     {user.username}
    //   </h6>
    //   <p>{user.email}</p>

    //   <Button variant="danger">
    //     Eliminar
    //   </Button>
    // </div>
  );
};

export default UserItem;
