import React, { useState } from "react";

const Contact = () => {
  // example 2
  const [isShown, setIsShown] = useState(false);

  // example 3
  const [currentMsg, setCurrentMsg] = useState([]);
  // end of example 3

  function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const description = formData.get("description");
    // const snack = formData.get("snack");
    // const fruit = formData.getAll("fruit");
    // const favColor = formData.get("favColor");
    // console.log(email);
    // console.log(password);
    // console.log(description);
    // console.log(snack);
    // console.log(fruit);
    // console.log(favColor);
    const data = Object.fromEntries(formData);
    const fruit = formData.getAll("fruit");
    // inputting all data into one value
    const allData = {
      ...data,
      fruit,
    };
    console.log(allData);

    formEl.reset();
  }

  function displayMsg() {
    if (currentMsg === 1) {
      return <p> You have 1 unread message</p>;
    } else {
      return <p>You have {currentMsg.length} unread messages</p>;
    }
  }
  return (
    <div className="flex flex-col  items-center justify-center gap-8">
      <div className="bg-green-300 px-6 ">
        <h1 className="text-center">Signup Form</h1>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="a@gnail.com"
            defaultValue="ayo@g.com"
            className="bg-white w-full pl-2 py-2 mb-3"
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-white w-full pl-2 py-2 mb-3"
          />
          <br />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="w-full bg-white py-2 px-2"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <br />
          {isShown && (
            <fieldset className="flex flex-col border-black border-2 py-2 px-4 gap-2">
              <legend>Snacks</legend>
              <label htmlFor="cake">
                <input
                  type="radio"
                  name="snack"
                  id="cake"
                  value="cake"
                  className="mr-2"
                />
                Cake
              </label>
              <label htmlFor="pie">
                <input
                  type="radio"
                  name="snack"
                  id="pie"
                  value="pie"
                  className="mr-2"
                />
                Pie
              </label>
              <label htmlFor="donut">
                <input
                  type="radio"
                  name="snack"
                  id="donut"
                  value="donut"
                  defaultChecked={true}
                  className="mr-2"
                />
                Donut
              </label>
            </fieldset>
          )}

          <br />
          <fieldset className="flex flex-col border-black border-2 py-2 px-4 gap-2">
            <legend>Fruits</legend>
            <label htmlFor="apple">
              <input
                type="checkbox"
                name="fruit"
                id="apple"
                value="apple"
                className="mr-2"
              />
              Apple
            </label>
            <label htmlFor="lemon">
              <input
                type="checkbox"
                name="fruit"
                id="lemon"
                value="lemon"
                className="mr-2"
              />
              Lemon
            </label>
            <label htmlFor="pawpaw">
              <input
                type="checkbox"
                name="fruit"
                id="pawpaw"
                value="pawpaw"
                defaultChecked={true}
                className="mr-2"
              />
              Pawpaw
            </label>
          </fieldset>

          <br />
          <label htmlFor="favColor">What is your favourite color?</label>
          <select name="favColor" id="favColor" className="w-full">
            <option value="">color</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="lemon">Lemon</option>
          </select>
          <br />
          <button
            type="submit"
            className="bg-blue-700 px-6 py-2 my-4 text-white rounded-[12px]"
          >
            Submit
          </button>
        </form>

        {/* example 3-conditional rendering */}
        <div>
          {currentMsg.length > 0 ? displayMsg() : <p>You are all caught up</p>}
        </div>
        <p>
          conditional rendering is the process of selectively displaying
          elements or omponent in the ui
        </p>
        <p>when i want to determine when a rendering is a boolean</p>
        <p>
          ternary is used for determine multiple conditions that are not just
          boolean
        </p>
        <p>
          to determine between more than 2 options a variable or function can be
          created to store the conditionals
        </p>
      </div>
    </div>
  );
};

export default Contact;
