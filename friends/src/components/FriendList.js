import React from "react";
import { axiosWithAuth } from "./axios/axiosWithAuth";
import { Table } from "reactstrap";
import Nav from "./Nav";
import Loading from "../components/Loading";
import { Button } from "reactstrap";
import "../App.css";

class FriendList extends React.Component {
  state = {
    friends: [],
    isLoading: false,
    success: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      axiosWithAuth()
        .get("/api/friends")
        .then((response) => {
          console.log(response);
          this.setState({ friends: response.data });
          this.setState({ isLoading: false });
        })
        .catch((err) => console.log(err));
    }, 1500);
    //
  };

  delete = (id) => {
    axiosWithAuth()
      .delete(`/api/friends/${id} `)
      .then((response) => {
        console.log(response);
        this.setState({ friends: response.data });
        this.setState({ success: response.statusText });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        {this.state.isLoading === true ? (
          <Loading />
        ) : (
          <div>
            {this.state.SuccessMsg ? "Deleted!" : null}
            <Table striped>
              <thead>
                {" "}
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {this.state.friends.map((friend) => {
                  return (
                    <tr key={friend.id}>
                      <td>{friend.name}</td>
                      <td>{friend.age}</td>
                      <td>{friend.email}</td>
                      <td>
                        <Button
                          onClick={() => this.delete(friend.id)}
                          color="secondary"
                          size="sm"
                        >
                          Delete
                        </Button>
                      </td>
                      <td>
                        <Button color="secondary" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

export default FriendList;
