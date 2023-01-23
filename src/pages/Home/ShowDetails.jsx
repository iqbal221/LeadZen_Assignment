import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const contactDetails = useLoaderData();
  console.log(contactDetails);
  return (
    <div className="flex justify-center">
      <div className="lg:w-4/5 md:3/4 w-full my-7">
        <div className="card bg-base-100 shadow-lg">
          <div className="grid lg:grid-cols-5 gap-6 p-8 ">
            <h2 className="text-md text-left font-bold">
              {contactDetails?.company.name}
            </h2>
            <div className="text-left ml-5">
              <h2 className="text-md text-primary font-semibold">CONTACT</h2>
              <p>{contactDetails?.name}</p>
            </div>
            <div className="text-left ml-5">
              <h2 className="text-md text-primary font-semibold">STREET</h2>
              <p>{contactDetails?.address.street}</p>
            </div>
            <div className="text-left ml-5">
              <h2 className="text-md text-primary font-semibold">CITY</h2>
              <p>{contactDetails?.address.city}</p>
            </div>
            <div className="ml-5">
              <Link to="/">
                <button className="btn btn-primary px-2">Hide Details</button>
              </Link>
            </div>
          </div>
          <div className="m-6">
            <div className="divider text-primary">
              <h3>Description</h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-3">
            <div className="text-left ml-6 font-semibold">
              <div className="mb-6">
                <h2 className="text-bold text-lg">Contact person</h2>
                <p>{contactDetails?.name}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-bold text-lg">Email</h2>
                <p>{contactDetails?.email}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-bold text-lg">Phone</h2>
                <p>{contactDetails?.phone}</p>
              </div>
            </div>
            <div className="text-left ml-6 font-semibold">
              <div className="mb-6">
                <h2 className="text-bold text-lg">Address</h2>
                <p>{contactDetails?.address.street}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-bold text-lg">Zip Code</h2>
                <p>{contactDetails?.address.zipcode}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-bold text-lg">City</h2>
                <p>{contactDetails?.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
