import Instagram from "./components/Instagram.jsx";
import Schedule from "./components/Schedule.jsx";
import Team from "./components/Team.jsx";
import "./App.css";

function App() {
  

  return (
    <>
      <main>
        <section>
          {/* this will be the div container for our cool sketch / interaction */}
          <div></div>
          {/* Not sure if the h1 down here would need to be within the above div or nah */}
          <h1>
            A student-led club for designers interested in digital design,
            coding, and everything in between.
          </h1>
        </section>
        <section>
          <p>
            We meet on Wednesdays from 4-6pm, either hosting guest speakers or
            doing live code demos.{" "}
          </p>
        </section>
        <section>
          {/* The schedule would be contained here as a React component */}
          <Schedule />
        </section>
        <section>
          <p>
            Our meetings are open to anyone interested. For e-mail updates about
            upcoming events, please fill out{" "}
            <a
              href="https://docs.google.com/forms/d/1FGlV54QMuCoUHvwZAB28qHUk15tnFaWuM7IxeHvVpDY/edit"
              target="_blank"
            >
              this form
            </a>{" "}
            For non New School students interested in attending, please{" "}
            <a href="mailto:codelab@newschool.edu">e-mail us </a> and we’ll snag
            you a guest pass
          </p>
        </section>
        <section>
          <h2>Leadership</h2>
          <div>
            <Team />
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <div>
            {/* IG Widget that is currently not working. The figure tag should stay here, but the script tag could be moved to make it work */}
            <Instagram />
          </div>

          <a href="https://www.instagram.com/parsonscodelab/" target="_blank">
            <img src="https://www.datocms-assets.com/103104/1690991093-ig.svg" />
          </a>
        </section>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
