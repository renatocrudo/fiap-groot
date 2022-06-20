// @flow
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { hostname } from "os";
type Props = {};

interface RoomModel {
  id: string;
  name: string;
}
//ky
let countRender = 0;
export const Room = (props: Props) => {
  const { keycloak } = useKeycloak();

  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const inputRef = useRef() as MutableRefObject<any>;
  const history = useHistory();
  console.log(++countRender);

  useEffect(() => {
    // (async () => {
    //   const response = await axios.get("http://localhost:3000/rooms");
    //   setRooms(response.data);
    // })();
    //interceptors
    //axiosInst.intercetpros.request.use((config) => config.headers return config)
    axios
      .get("http://localhost:3000/rooms", {
        headers: {
          Authorization: `Bearer ${keycloak?.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setRooms(response.data);
      });
    return () => {
      //destruir coisas aqui
    };
  }, []);

  function toChat(roomId: string) {
    const name = inputRef.current.value;
    history.push(`/chat?room_id=${roomId}&name=${name}`);
    //console.log(roomId, inputRef.current.value);
  }

  return (
    <div>
      <h1>Salas</h1>
      <p>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" ref={inputRef} />
      </p>
      <ul>
        {rooms.map((room, key) => (
          <li key={key} onClick={() => toChat(room.id)}>
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
};