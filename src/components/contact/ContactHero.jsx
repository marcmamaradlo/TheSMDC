const ContactHero = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1520756739397-7d1218d4efea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const bgImg = {
    backgroundImage: `url('${heroImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepear: "no-repeat",
  };
  return (
    <>
      <div className="banner-hero" style={bgImg}></div>
    </>
  );
};

export default ContactHero;
