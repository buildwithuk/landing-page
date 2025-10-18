import ContentComponent from "./components/content-component/content-component";
import FooterComponent from "./components/footer-component/footer-compose";
import HeaderComponent from "./components/header-component/header-component";

function LandingPageComponent() {
  return (
    <>
      <div>
        <HeaderComponent></HeaderComponent>
      </div>
      <div>
        <ContentComponent></ContentComponent>
      </div>
      <div>
        <FooterComponent></FooterComponent>
      </div>
    </>
  );
}

export default LandingPageComponent;
