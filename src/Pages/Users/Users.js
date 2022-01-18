import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get("https://randomuser.me/api?results=5")
      .then((res) => {
        console.log(res.data.results);
        setUsers([...users, ...res.data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className={`${styles.users}`}>
        <div className={`${styles.container} container`}>
          <div className={`${styles.logo}`}>Infinite User</div>

          <div className={`${styles.body}`}>
            <InfiniteScroll
              dataLength={users.length}
              next={getData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {users.map((el) => {
                return (
                  <div key={el.id} className={`${styles.user}`}>
                    <div className={`${styles.userTitleBox}`}>
                      <div
                        className={`${styles.userTitle}`}
                      >{`${el.name.title} ${el.name.first} ${el.name.last}`}</div>
                      {/* <div className={`${styles.status}`}>Applied</div> */}
                      <div className={`${styles.imgBox}`}>
                        <img
                          src={el.picture.thumbnail}
                          className={`${styles.img}`}
                          alt="company logo"
                        />
                      </div>
                    </div>
                    <div className={`${styles.company}`}>
                      Gender: {el.gender}
                    </div>
                    <div className={`${styles.company}`}>Age: {el.dob.age}</div>
                    <div className={`${styles.company} ${styles.email}`}>
                      Email: {el.email}
                    </div>
                    <div className={`${styles.company}`}>
                      Contact: {el.phone}
                    </div>
                    <div className={`${styles.company} ${styles.address}`}>
                      {/* {el.location.street} <br /> */}
                      {Object.values(el.location.street).map((el) => (
                        <p>{el}</p>
                      ))}
                      {el.location.city} <br />
                      {el.location.state} <br />
                    </div>
                    <div className={`${styles.company}`}>
                      Nationality: {el.nat}
                    </div>
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
