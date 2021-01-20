import styled from "styled-components";

const Room = styled.li`
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

const Lobby = ({
  roomName,
  handleRoomNameChange,
  handleSubmit,
  rooms,
  onClickRoom,
}) => {
  return (
    <>
      <h2>Awesome Web RTC</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={handleRoomNameChange}
        />
        <button type="submit">Create Room</button>
      </form>
      <h4>Rooms</h4>
      <ul>
        {rooms.map((room) => (
          <Room
            key={room.id}
            onClick={() => {
              onClickRoom(room);
            }}
          >
            {room.name}
          </Room>
        ))}
      </ul>
    </>
  );
};

export default Lobby;
