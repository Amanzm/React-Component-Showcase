import "bootstrap/dist/css/bootstrap.min.css";
import Accordian from "./components/1 Accordian/Accordian";
import Color from "./components/2 Color Generator/Color";
import Rating from "./components/3 Stars/Rating";
import Slider from "./components/4 Image Slider/Slider";
import Load from "./components/5 Load More/Load";
import Qr from "./components/7 QR Code/Qr";
import Theme from "./components/8 Theme/Theme";
import Scroll from "./components/9 Scroll Indicator/Scroll";
import Tabs from "./components/10 Tabs/Tabs";
import Modal from "./components/11 Modal/Modal";
import Profile from "./components/12 Github Profile/Profile";
import AutoComplete from "./components/13 Autocomplete/AutoComplete";

const Container = ({ title, children }) => {
  return (
    <div className="card carda mb-4 shadow-sm rounded shadow-lg">
      <div className="card-header card-headera">
        <h3 className="text-center">{title}</h3>
      </div>
      <div className="card-body card-bodya">{children}</div>
    </div>
  );
};

function App() {
  return (
    <>
      <Scroll />
      <div className="container   my-5">
        <h1 className="text-center mb-5">Projects</h1>
        <Container title="1 Accordion">
          <Accordian />
        </Container>
        <Container title="2 Colors">
          <Color />
        </Container>
        <Container title="3 Star Rating">
          <Rating stars={7} />
        </Container>
        <Container title="4 Image Slider">
          <Slider url={"https://picsum.photos/v2/list"} limit={8} />
        </Container>
        <Container title="5 Load More">
          <Load />
        </Container>
        <Container title="7 QR Code">
          <Qr />
        </Container>
        <Container title="8 Theme">
          <Theme />
        </Container>
        <Container title="10 Tabs">
          <Tabs
            tabs={[
              {
                label: "Tab 1",
                content: <Qr />,
              },
              {
                label: "Tab 2",
                content: <Theme />,
              },
              {
                label: "Tab 3",
                content: <Color />,
              },
            ]}
          />
        </Container>
        <Container title="11 Modal">
          <Modal />
        </Container>
        <Container title="12 Github Profile">
          <Profile />
        </Container>

        <Container title="13  Search Auto Complete">
          <AutoComplete />
        </Container>
      </div>
    </>
  );
}

export default App;
