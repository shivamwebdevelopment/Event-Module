import Nav from "../components/Nav";
import "../assets/Event.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Event = () => {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    handleQuantityChange(event);
    storeQuantity(event);
    // You can add more function calls here if needed
  };

  // Function to handle changes in quantity input
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      // Calculate total price and update state
      const newTotalPrice = price * newQuantity;
      setValues({ ...values, guests: newQuantity, totalPrice: newTotalPrice });
    }
  };

  const storeQuantity = (e) => {
    setValues({ ...values, guests: e.target.value });
  };

  const price = 100;

  // Calculate the total price for the item based on its quantity
  const totalPrice = price * quantity;

  // Form Dynamic Values setup
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    image:
      "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    guests: "",
    location: "",
    startDate: "",
    endDate: "",
    totalPrice: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://65fd2bc29fc4425c65314935.mockapi.io/events", values)
      .then((res) => {
        console.log(res);
        navigate("/");
        // Reset form values to empty
        setValues({
          name: "",
          phone: "",
          email: "",
          image: "",
          guests: "",
          location: "",
          startDate: "",
          endDate: "",
          totalPrice: "",
        });
      })
      .catch((err) => console.log(err));

    // After submit form popup
    Swal.fire({
      title: "Thanks!",
      text: "Your Event Created. Please See Booked Details.",
      confirmButtonColor: "#17B6B6",
      confirmButtonText: "Go back",
    });
  };

  return (
    <>
      <div className="event-container">
        <Nav />
        <h1 className="text-3xl module-title">Create Event </h1>
        <form onSubmit={handleSubmit}>
          <div className="event-booklist">
            {/* Event Left side align */}
            <div className="event-left">
              <div className="user">
                <div className="user-img"></div>
                <div className="user-detail">
                  <p className=" text-[21px] md:text-3xl text-[#05fad1]">
                    Shivam Kumar
                  </p>
                  <span className="text-[14px]">Software Developer</span>
                </div>
              </div>
              {/* Event's Name */}
              <div className="event-name">
                <input
                  type="text"
                  placeholder="Event Name"
                  required
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>

              {/* Contact | Email */}
              <div className="location-contact">
                <div className="contact">
                  <FaPhoneAlt className="text-[24px] text-[#05fad1]" />
                  <input
                    placeholder="Phone No."
                    autoComplete="off"
                    type="number"
                    required
                    value={values.phone}
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
                    }
                  />
                </div>

                <div className="email">
                  <FaEnvelope className="text-[24px] text-[#05fad1]" />
                  <input
                    placeholder="Email Id"
                    autoComplete="off"
                    type="email"
                    required
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* Location | No. of Gurests | Amount |  */}
              <div className="location-contact">
                <div className="location">
                  <FaMapMarkerAlt className="text-[24px] text-[#05fad1]" />
                  <input
                    placeholder="Location"
                    type="text"
                    name="address"
                    required
                    value={values.location}
                    onChange={(e) =>
                      setValues({ ...values, location: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-2 quantity-amount">
                  <div className="quantity flex">
                    <label>No. of Guests:</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleInputChange}
                      required
                      min="0"
                      style={{
                        width: "40px",
                        textAlign: "center",
                        paddingLeft: "3px",
                        marginLeft: "3px",
                      }}
                    />
                  </div>

                  <p className="flex">
                    Amount:
                    <input
                      type="number"
                      required
                      value={totalPrice}
                      onChange={(e) =>
                        setValues({ ...values, totalPrice: e.target.value })
                      }
                      style={{
                        width: "60px",
                        textAlign: "center",
                        paddingLeft: "5px",
                        marginLeft: "6px",
                      }}
                    />
                  </p>
                </div>
              </div>

              {/* Date Time Section */}
              <div className="date-time-section">
                {/* Start Date */}
                <div className="start-date">
                  <label>
                    <span className="text-xl mr-3">From:</span>
                    <input
                      className="text-[#fff]"
                      required
                      type="datetime-local"
                      value={values.startDate}
                      onChange={(e) =>
                        setValues({ ...values, startDate: e.target.value })
                      }
                    />
                  </label>
                </div>
                {/* End Date */}
                <div className="end-date">
                  <label>
                    <span className="text-xl mr-3">To:</span>
                    <input
                      className="text-[#fff]"
                      type="datetime-local"
                      required
                      value={values.endDate}
                      onChange={(e) =>
                        setValues({ ...values, endDate: e.target.value })
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* Event Right side align */}
            <div className="event-right">
              <div className="selected-img">
                <img
                  src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>

              <div className="select-img">
                <div>
                  <Link href="#">
                    <img
                      src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <img
                      src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <img
                      src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button className="book-btn" type="submit" onClick={() => {}}>
            Create Event
          </button>
        </form>
      </div>
    </>
  );
};

export default Event;
