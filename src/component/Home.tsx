
import vatsalImg from '../images/vatsal_img.png';

const Home = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      background: "white",
      overflow: "hidden",
      padding: "5vh 5vw",
      marginTop: "60px" // Add gap below header underline
    }}
  >
    <img
      src={vatsalImg}
      alt="Vatsal"
      style={{
        height: "60vh",
        width: "auto",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        objectFit: "cover"
      }}
    />
    <div
      style={{
        marginLeft: "5vw",
        fontSize: "0.85rem",
        color: "#1139a7",
        maxWidth: "40vw",
        textAlign: "left",
        lineHeight: "1.6"
      }}
    >
      <h2 style={{ marginBottom: "1rem", fontSize: "1rem", textAlign: "left" }}>Welcome to I am Still Alive!</h2>
      <span>
         <b>Our Vision:</b><br />
        To be the world's leading patient- and survivorship-centered hub for oncology and radiotherapy education and care—empowering individuals through knowledge, compassion, and healing.<br />
        We extend our expertise beyond cancer, supporting those living with conditions such as arthritis and neurological or psychiatric disorders.   <br /> <br />    
        <b>Our Mission: </b><br />
        To advance global oncology and radiotherapy by connecting patients, survivors, caregivers, healthcare professionals, and businesses through a patient-centered approach. <br />
         We aim to foster a robust survivorship economy that addresses both medical and non-medical challenges, improves outcomes, lowers costs, and bridges barriers across geographic, legal, and cultural boundaries
      </span>
    </div>
  </div>
);

export default Home;