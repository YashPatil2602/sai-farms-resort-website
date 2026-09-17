import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(rgba(9, 36, 26, 0.88), rgba(9, 36, 26, 0.78))",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "120px 30px 40px",
          }}
        >
          <div>
            <p
              style={{
                color: "#d5bd8a",
                letterSpacing: "5px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontSize: "12px",
              }}
            >
              An 8 Acre Riverside Escape
            </p>

            <h1
              style={{
                fontSize: "clamp(64px, 9vw, 125px)",
                marginBottom: "16px",
              }}
            >
              Sai Farms
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2vw, 21px)",
                fontWeight: "300",
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              Destination Weddings · Staycations · Corporate Events ·
              School Experiences
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
