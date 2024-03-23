import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import Nav from "../components/Nav";
import "../assets/TaskBar.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TaskBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://65fd2bc29fc4425c65314935.mockapi.io/events")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="event-container">
        <Nav />
        <h1 className="text-3xl module-title">Booked Event</h1>
        {data.map((d, i) => (
          <div className="event-booklist-store" key={i}>
            <div className="store-left">
              <p className="booked-id">{d.id}</p>
              <h3 className="text-3xl font-semibold">{d.name}</h3>
              <div className="date-time">
                {/* Start Date */}
                <span>Start Date: {d.startDate}</span>
                {/* End Date */}
                <span>End Date: {d.endDate}</span>
              </div>
              <div className="guest">
                <FaUsers className="text-[24px] text-[#05fad1]" /> {d.guests}
                Guests |
                <FaMoneyBillAlt className="text-[24px] text-[#05fad1]" /> Amount
                &nbsp;
                {d.totalPrice}
              </div>
              <div className="phone">
                <FaPhoneAlt className="text-[21px] text-[#05fad1]" /> {d.phone}
              </div>
              <div className="email">
                <FaEnvelope className="text-[21px] text-[#05fad1]" />
                {d.email}
              </div>
              <div className="location">
                <FaMapMarkerAlt className="text-[21px] text-[#05fad1]" />
                {d.location}
              </div>
            </div>
            <div className="store-right">
              <img src={d.image} alt="image" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskBar;
