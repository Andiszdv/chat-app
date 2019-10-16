import React from "react";
import Contact from "./Contact";
const users = [
  {
    name: "Charlie Edgar",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    online: false
  },
  {
    name: "Renee White",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    online: false
  },
  {
    name: "Carla Szabo",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true
  },
  {
    name: "Harry Smith",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    online: false
  },
  {
    name: "Mary Johnson",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    online: true
  }
];

const ContactList = () => (
  <div>
    {users.map(user => (
      <Contact
        name={user.name}
        image={user.image}
        online={user.online}
        keys={user.name}
      />
    ))}
  </div>
);

export default ContactList;
