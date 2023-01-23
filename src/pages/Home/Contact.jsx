import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);

  return (
    <>
      <div className="lg:w-4/5 md:3/4 w-full my-7">
        <div className="card bg-base-100 shadow-lg">
          {contact.map((info) => (
            <div key={info.id} className="grid lg:grid-cols-5 gap-6 p-8 ">
              <h2 className="text-md text-left font-bold">
                {info.company.name}
              </h2>
              <div className="text-left ml-5">
                <h2 className="text-md text-primary font-semibold">CONTACT</h2>
                <p>{info.name}</p>
              </div>
              <div className="text-left ml-5">
                <h2 className="text-md text-primary font-semibold">STREET</h2>
                <p>{info.address.street}</p>
              </div>
              <div className="text-left ml-5">
                <h2 className="text-md text-primary font-semibold">CITY</h2>
                <p>{info.address.city}</p>
              </div>
              <div className="ml-5">
                <Link to={`/contact_details/${info.id}`}>
                  <button className="btn btn-primary px-2">Show Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
